import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  subscr!: Subscription;
  isSubscription: boolean = false;
  title = 'Stop interval';

  stream$: Subject<number> = new Subject<number>();
  counter = 0;
  result = 0;

  constructor() {
    this.subscription = this.stream$.subscribe((value) => {
      this.result = value;
    });
  }

  // methods
  next() {
    this.counter++;
    this.stream$.next(this.counter);
  }

  stop() {
    this.isSubscription = !this.isSubscription;
    if (this.isSubscription) {
      this.subscription.unsubscribe();
      this.title = 'Start interval';
    } else {
      this.subscription = this.stream$.subscribe((value) => {
        this.result = value;
      });

      this.title = 'Stop interval';
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
