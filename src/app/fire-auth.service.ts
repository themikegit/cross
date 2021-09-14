import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}
<<<<<<< HEAD
<<<<<<< Updated upstream
  userDetails = new BehaviorSubject<any>({ user: { displayName: 'Guest' } });
=======
>>>>>>> Stashed changes
=======
  //logged user if any
  userDetails = new BehaviorSubject<any>('');
>>>>>>> 972697941741cb7db37dbe3f129924c7493e9cb4

  login(email: string, password: string): any {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
=======
      .then(() =>
        this.fireAuth.authState.subscribe((res) => {
          this.userDetails.next(res);
        })
      )
>>>>>>> 972697941741cb7db37dbe3f129924c7493e9cb4
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
