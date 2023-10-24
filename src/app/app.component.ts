import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  protected date: Date = new Date();
  private intervalDate: unknown = null;
  protected obs: Date;

  promise: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  // result: unknown;
  // response: unknown = this.promise.then((value) => {
  //   this.result = value;
  // });

  observable$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    });
  });

  constructor() {
    this.obs = new Date();
  }

  // methods

  ngOnInit(): void {
    this.intervalDate = setInterval(() => {
      this.date = new Date();
    }, 1000);

    this.observable$.subscribe((obs) => {
      this.obs = obs;
    });
  }
  ngOnDestroy(): void {
    this.intervalDate = null;
  }
}
