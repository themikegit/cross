import { Component, OnInit } from '@angular/core';
import { GetAllWodService } from '../get-all-wod.service';
import { pipe } from 'rxjs';

import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  products = [];

  cols: any[];

  constructor(private wodServ: GetAllWodService, private router: Router) {}

  navigateTo() {
    this.router.navigate(['all-wod/']);
  }

  ngOnInit(): void {
    let rw = [];
    this.wodServ
      .getWods()
      .pipe(
        map((n) => {
          n.map((d) => {
            rw.push({
              id: d.id,
              description: d.description,
              sub: d.sub,
              time: d.time[0].minutes + ':' + d.time[0].seconds,
            });
          });
          return rw;
        })
      )
      .subscribe((res) => {
        console.log(res), (this.products = res);
      });

    this.cols = [
      { field: 'description', header: 'Type' },
      { field: 'sub', header: 'Reps' },
      { field: 'time', header: 'Last time' },
    ];
  }
}
