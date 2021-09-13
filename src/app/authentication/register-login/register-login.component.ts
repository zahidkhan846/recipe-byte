import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/model/User';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css'],
})
export class RegisterLoginComponent implements OnInit {
  path: string = '';
  errors: any = {};
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.url
      .pipe(
        map((value) => {
          return value[0].path;
        })
      )
      .subscribe((path) => {
        this.path = path;
      });
  }

  isPathRegister(): boolean {
    if (this.path === 'register') {
      return true;
    } else {
      return false;
    }
  }

  isErrorsSet(): boolean {
    if (Object.keys(this.errors).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const userData: User = form.value;
    this.isLoading = true;
    if (this.isPathRegister()) {
      if (form.value.password !== form.value.confirmPassword) {
        this.errors.password = 'Password did not match!';
        return;
      }

      this.authService.signUp(userData).subscribe(
        (res) => {
          if (res.ok) {
            form.reset();
            this.isLoading = false;
            this.router.navigate(['auth', 'login']);
          }
        },
        (errMessage) => {
          this.errors.message = errMessage;
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signIn(userData.email, userData.password).subscribe(
        (resData) => {
          this.isLoading = false;
        },
        (errMessage) => {
          this.errors.message = errMessage;
          this.isLoading = false;
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onClose() {
    this.isLoading = false;
  }

  onClearError() {
    this.errors = {};
  }
}
