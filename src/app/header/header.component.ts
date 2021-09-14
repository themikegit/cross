import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireAuthService } from '../fire-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
<<<<<<< Updated upstream
  constructor(private user: FireAuthService) {}
  currentUser;
  ngOnInit(): void {
    this.user
      .currentUser()
      .subscribe((res) => (this.currentUser = res.displayName));
  }
=======
  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {}
>>>>>>> Stashed changes
}
