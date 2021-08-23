import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Message, MessageService } from 'primeng/api';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
  providers: [MessageService],
})
export class AddNewComponent implements OnInit {
  constructor(
    private afs: AngularFirestore,
    private msgserv: MessageService,
    private router: Router
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

  // addMultiple() {
  //   this.msgserv.addAll([
  //     {
  //       severity: 'success',
  //       summary: 'Service Message',
  //       detail: 'Via MessageService',
  //     },
  //     {
  //       severity: 'info',
  //       summary: 'Info Message',
  //       detail: 'Via MessageService',
  //     },
  //   ]);
  // }

  clear() {
    this.msgserv.clear();
  }

  wodForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    sub: new FormControl('', [Validators.required]),
    wod: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  submitWod() {
    let lastID = '';
    this.afs
      .collection('wod')
      .add(this.wodForm.value)
      .then((docRef) => (lastID = docRef.id))
      .then(() => this.addSingle('wod added', 'success', 1000))
      .then(() => this.router.navigate(['/all-wod', lastID]));
  }

  ngOnInit(): void {}
}
