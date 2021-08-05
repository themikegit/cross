import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudFirestoreService {
  constructor(private afs: AngularFirestore) {}

  saveWOD(wodObj) {
    this.afs
      .collection('wodf')
      .add(wodObj)
      .catch((err) => alert(err));
  }
}
