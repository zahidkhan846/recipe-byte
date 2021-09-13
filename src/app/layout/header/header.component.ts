import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/model/User';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  currentUser: User = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSub = this.authService.currentUser.subscribe((currentUser) => {
      this.currentUser = currentUser;
    });
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
