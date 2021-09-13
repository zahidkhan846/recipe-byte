import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { signInUrl, signUpUrl } from 'src/config/firebase';
import { environment } from 'src/environments/environment';
import { AuthRes } from 'src/model/AuthRes';
import { User } from 'src/model/User';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = new Subject<User>();

  constructor(private http: HttpClient, private userService: UserService) {}

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
          const expTime = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
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
            });
        })
      );
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
