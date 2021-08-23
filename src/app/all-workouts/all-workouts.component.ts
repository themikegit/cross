import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllWodService } from '../get-all-wod.service';

@Component({
  selector: 'app-all-workouts',
  templateUrl: './all-workouts.component.html',
  styleUrls: ['./all-workouts.component.scss'],
})
export class AllWorkoutsComponent implements OnInit {
  allWods: any;
  constructor(private woodService: GetAllWodService) {}

  ngOnInit() {
    this.woodService.getWods().subscribe((res) => {
      this.allWods = res;
    });
  }
}
