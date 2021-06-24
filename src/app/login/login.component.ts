import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '../fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: FireAuthService, private router: Router) {}

  user = false;
  fireUser;

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  logIn() {
    this.authService.login('test@test.com', 'test2020');
    this.display = false;
  }

  logoutlocal() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((res) => (this.fireUser = res));
  }
}
