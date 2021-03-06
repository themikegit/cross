import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { TimeResultsService } from '../time-results.service';
import NoSleep from 'nosleep.js';

import firebase from 'firebase/app';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  constructor(
    private timeServ: TimeResultsService,
    private asf: AngularFirestore,
    private route: ActivatedRoute
  ) {}
  @ViewChild('currentTime') currentTime: ElementRef;
  running = true;
  seconds = 0;
  minutes = 0;
  int: any;

  icon = 'pi pi-play';
  completedTime;
  currentRoute;
  targetWod;
  roundsObj = {
    allRounds: [],
  };

  noSleep = new NoSleep();

  ngOnInit(): void {
    this.route.params.subscribe((res) => (this.currentRoute = res.id));
  }

  startTimerMod() {
    if (this.running) {
      this.startTime();
      this.running = !this.running;
    } else {
      this.pauseTime();
      this.running = !this.running;
    }
  }

  startTime() {
    this.icon = 'pi pi-pause';
    this.int = setInterval(() => {
      if (this.seconds >= 59) {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
      }
      this.seconds = this.seconds + 1;
      console.log(this.seconds);
    }, 1000);
    this.noSleep.enable();
  }

  pauseTime() {
    this.icon = 'pi pi-play';
    clearInterval(this.int);
  }

  resetTime() {
    clearInterval(this.int);
    this.running = false;
    this.icon = 'pi pi-play';
    this.seconds = 0;
    this.minutes = 0;
    this.roundsObj.allRounds = [];
  }
  round = 1;
  roundTime() {
    if (!this.running) {
      this.roundsObj.allRounds.push({
        round: this.round++,
        minutes: this.minutes,
        seconds: this.seconds,
      });
    }
  }

  newDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let thisDay = dd + '/' + mm + '/' + yyyy;
    return thisDay;
  }

  finishTime() {
    this.completedTime = {
      minutes: this.minutes,
      seconds: this.seconds,
      created: this.newDate(),
      rounds: this.roundsObj,
    };
    this.targetWod = this.asf.collection('wod').doc(this.currentRoute);
    this.targetWod.update({
      time: firebase.firestore.FieldValue.arrayUnion(this.completedTime),
    });

    this.resetTime();
    this.noSleep.disable();
  }
}
