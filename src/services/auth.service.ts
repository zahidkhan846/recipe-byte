import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { signInUrl, signUpUrl } from 'src/config/firebase';
import { environment } from 'src/environments/environment';
import { AuthRes } from 'src/model/AuthRes';
import { User } from 'src/model/User';
import { UserService } from './user.service';

export interface CurrentUser {
  authToken: string;
  email: string;
  expTime: string;
  fullName: string;
  password?: string;
  userId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  timer: any = null;
  currentUser = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  signUp(userData: User) {
    const newUser = {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true,
    };
    return this.http
      .post<AuthRes>(signUpUrl(environment.firebase_api), newUser, {
        observe: 'response',
      })
      .pipe(
        catchError(this.handleErrors),
        tap((res) => {
          console.log(res.body);
          if (res.ok) {
            const userId = res.body.localId;
            this.userService.createUser(userId, userData).subscribe();
          }
        })
      );
  }

  signIn(email: string, password: string) {
    const userData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http
      .post<AuthRes>(signInUrl(environment.firebase_api), userData)
      .pipe(
        catchError(this.handleErrors),
        tap((resData) => {
          if (!resData) return;
          const expiresIn: number = +resData.expiresIn * 1000;
          const expTime = new Date(new Date().getTime() + expiresIn);
          this.userService
            .getCurrentUser(resData.localId)
            .subscribe((userResData) => {
              const fullName = userResData.fullName;
              const user = new User(
                resData.email,
                null,
                fullName,
                resData.localId,
                resData.idToken,
                expTime
              );
              this.currentUser.next(user);
              this.autoLogout(expiresIn);
              localStorage.setItem('userData', JSON.stringify(user));
            });
        })
      );
  }

  setCurrentUser() {
    const userData: CurrentUser = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const user = new User(
      userData.email,
      null,
      userData.fullName,
      userData.userId,
      userData.authToken,
      new Date(userData.expTime)
    );
    const loggedOutIn =
      new Date(userData.expTime).getTime() - new Date().getTime();

    if (user.token) {
      this.currentUser.next(user);
      this.autoLogout(loggedOutIn);
    }
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userData');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = null;
    this.router.navigate(['recipes']);
  }

  autoLogout(expTime: number) {
    this.timer = setTimeout(() => {
      this.logout();
    }, expTime);
  }

  private handleErrors(errRes) {
    let errors = [];
    let message = 'Somthing went wrong!';
    if (!errRes.error || errRes.error.error.errors.length === 0) {
      return throwError(message);
    } else {
      errors = errRes.error.error.errors;
    }
    if (errors.length > 0 && errors[0].message === 'EMAIL_EXISTS') {
      message = 'Email already in use!';
    }
    if (errors.length > 0 && errors[0].message === 'EMAIL_NOT_FOUND') {
      message = 'User Does not exists!';
    }
    if (errors.length > 0 && errors[0].message === 'INVALID_PASSWORD') {
      message = 'Invalid Password!';
    }
    return throwError(message);
  }
}
