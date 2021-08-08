import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  getUser() {
    return this.fireAuth.user;
  }

  login(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => localStorage.setItem('user', JSON.stringify(res.user)))
      .then(() => this.router.navigate(['/all-wod']));
  }

  logout() {
    this.fireAuth
      .signOut()
      .then(() => localStorage.removeItem('user'))
      .then(() => this.router.navigate(['']));
  }

  // signup() {
  //   this.fireAuth.createUserWithEmailAndPassword(
  //     'mail@hot.com',
  //     'lepzivot2020'
  //   );
  // }
}
