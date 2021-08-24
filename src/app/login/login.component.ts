import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  display: boolean = false;
  sessionUser;
  userForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit() {
    this.authService.currentUser().subscribe((res) => (this.sessionUser = res));
  }

  showDialog() {
    this.display = true;
  }

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

  logIn() {
    this.authService
      .login(this.userForm.value.email, this.userForm.value.password)
      .then((res) => (res ? this.addSingle('welcome', 'success', 1000) : ''))
      .catch((err) => this.addSingle(err.message, 'error', 3000));

    this.userForm.reset();
    this.display = false;
  }

  register() {
    this.authService
      .signup(this.userForm.value.email, this.userForm.value.password)
      .then((res) =>
        res.user.updateProfile({
          displayName: this.userForm.value.username,
        })
      )
      .then((res) => this.addSingle(`welcome  `, 'success', 1000))
      .catch((err) => this.addSingle(err.message, 'error', 300));
    this.display = false;
  }

  logoutlocal() {
    this.authService.logout();
  }
}
