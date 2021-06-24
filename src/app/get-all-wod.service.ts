import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllWodService {
  wodCollection: AngularFirestoreCollection<any>;
  wods: Observable<any[]>;

  wod: AngularFirestoreDocument;
  wodObs: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.wods = this.afs.collection('wod').valueChanges({ idField: 'id' });
  }

  getWods() {
    return this.wods;
  }

  // getSingleWod(id) {
  //   this.wod = this.afs.doc('all-wod/' + id);
  //   this.wodObs = this.wod.valueChanges();
  // }
}
