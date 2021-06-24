import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeResultsService {
  timeRes = new Subject<any>();

  constructor() {}
}
