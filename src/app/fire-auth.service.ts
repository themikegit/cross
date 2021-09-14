import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
  //logged user if any
  userDetails = new BehaviorSubject<any>('');

  login(email: string, password: string): any {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
      .then(() =>
        this.fireAuth.authState.subscribe((res) => {
          this.userDetails.next(res);
        })
      )
      .then(() => this.router.navigate(['/all-wod']));
  }

  logout() {
    this.fireAuth
      .signOut()
      .then(() => localStorage.removeItem('user'))
      .then(() => this.userDetails.next(''))
      .then(() => this.router.navigate(['']));
  }

  signup(email: string, password: string) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }
}
