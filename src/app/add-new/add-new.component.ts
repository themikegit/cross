import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudFirestoreService } from '../crud-firestore.service';
import { Message, MessageService } from 'primeng/api';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  constructor(private afs: AngularFirestore) {}

  wodForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    sub: new FormControl('', [Validators.required]),
    wod: new FormControl('', [Validators.required]),
  });

  submitWod() {
    this.afs
      .collection('wod')
      .add(this.wodForm.value)
      .then((res) => this.show(res));
  }

  msgs = [];

  show(res) {
    console.log(res);
    this.msgs = [
      {
        severity: 'success',
        summary: 'New WOOD added',
        detail: '',
      },
    ];
  }

  hide() {
    this.msgs = [];
  }

  ngOnInit(): void {}
}
