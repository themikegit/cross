import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireAuthService } from '../fire-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< Updated upstream
  constructor(private user: FireAuthService) {}
=======
  constructor(private loggedUser: FireAuthService) {}
>>>>>>> 972697941741cb7db37dbe3f129924c7493e9cb4
  currentUser;
  ngOnInit(): void {
    this.loggedUser.userDetails.subscribe((res) => {
      this.currentUser = res.displayName;
    });
  }
=======
  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {}
>>>>>>> Stashed changes
}
