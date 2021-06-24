import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GetAllWodService } from '../get-all-wod.service';

@Component({
  selector: 'app-single-wood',
  templateUrl: './single-wood.component.html',
  styleUrls: ['./single-wood.component.scss'],
})
export class SingleWoodComponent implements OnInit {
  id;
  wod: AngularFirestoreDocument;
  wodObs$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private asf: AngularFirestore,
    private getWod: GetAllWodService
  ) {
    this.route.params.subscribe((res) => (this.id = res.id));
  }

  ngOnInit(): void {
    this.wodObs$ = this.asf.doc<any>('wod/' + this.id).valueChanges();
  }
}
