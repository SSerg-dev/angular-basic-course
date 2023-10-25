import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { isSubscription } from 'rxjs/internal/Subscription';
import { map, filter } from 'rxjs/operators';

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
    this.subscribe();
  }

  // methods
  subscribe() {
    this.subscription = this.interval$
      .pipe(
        filter((value) => value % 2 === 0),
        map((value) => `mapped value ${value}`)
      )
      .subscribe((value) => {
        console.log('start subscribe:', value);
      });
  }

  stop() {
    this.isSubscription = !this.isSubscription;
    if (this.isSubscription) {
      this.subscription.unsubscribe();
      this.title = 'Start interval';
    } else {
      this.subscribe();
      this.title = 'Stop interval';
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
