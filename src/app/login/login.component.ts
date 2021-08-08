import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FireAuthService } from '../fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: FireAuthService,
    private router: Router,
    private msgserv: MessageService
  ) {}

  addSingle(msg: string, type: string, time: number) {
    this.msgserv.add({
      severity: type,
      summary: msg,
      detail: '',
    });

    setTimeout(() => {
      this.clear();
    }, time);
  }

  clear() {
    this.msgserv.clear();
  }
  user = false;
  fireUser;

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  logIn() {
    this.authService
      .login('miki@admin.com', 'miki2020')
      // .login('test@test.com', 'test2020')
      .then((res) => (res ? this.addSingle('welcome', 'success', 1000) : ''))
      .catch((err) => this.addSingle(err.message, 'error', 300));
    this.display = false;
  }

  logoutlocal() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((res) => (this.fireUser = res));
  }
}
