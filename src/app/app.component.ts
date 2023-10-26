import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, of } from 'rxjs';
import { isSubscription } from 'rxjs/internal/Subscription';
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
  interval$: Observable<number>;
  title = 'Stop interval';

  constructor() {
    this.interval$ = interval(1000);
    // this.subscribe();
    // -----------------------------
    const stream$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1500);

      setTimeout(() => {
        observer.complete();
      }, 2100);

      setTimeout(() => {
        observer.error('Something went wrong');
      }, 2000);

      setTimeout(() => {
        observer.next(2);
      }, 2500);
    });

    this.subscr = stream$.subscribe(
      (value) => console.log('Next: ', value),
      (error) => console.log('Error: ', error),
      () => console.log('Complete')

      // also recommended
      // {
      //   next: (v) => console.log(v),
      //   error: (e) => console.error(e),
      //   complete: () => console.info('complete $$$$'),
      // }
    );
    // -----------------------------
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
