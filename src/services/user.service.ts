import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDataUrl } from 'src/config/firebase';
import { User } from 'src/model/User';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(userId: string, user: User) {
    const newUser = {
      email: user.email,
      fullName: user.fullName,
    };
    return this.http.put<User>(userDataUrl(userId), newUser);
  }

  getCurrentUser(userId: string) {
    return this.http.get<User>(userDataUrl(userId));
  }
}
