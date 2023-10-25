import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { isSubscription } from 'rxjs/internal/Subscription';
// import {  } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  isSubscription: boolean = false;
  interval$: Observable<number>;
  title = 'Stop interval';

  constructor() {
    this.interval$ = interval(1000);
    this.subscription = this.interval$.subscribe((value) => {
      console.log('start subscribe:', value);
    });
  }

  // methods
  stop() {
    this.isSubscription = !this.isSubscription;
    if (this.isSubscription) {
      this.subscription.unsubscribe();
      this.title = 'Start interval';
    } else {
      this.subscription = this.interval$.subscribe((value) => {
        console.log('start again subscribe:', value);
      });
      this.title = 'Stop interval';
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
