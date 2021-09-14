import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../fire-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private loggedUser: FireAuthService) {}
  currentUser;
  ngOnInit(): void {
    this.loggedUser.userDetails.subscribe((res) => {
      this.currentUser = res.displayName;
    });
  }
}
