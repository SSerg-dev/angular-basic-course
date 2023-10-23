import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  date: Date = new Date()
  private intervalDate: any = null

  constructor() {}
  // methods
  ngOnInit(): void {
   this.intervalDate = setInterval(() => {
      this.date = new Date()
    }, 1000)
  }

  ngOnDestroy(): void {
      console.log("🚀 ~ file: app.component.ts:21 ~ AppComponent ~ ngOnDestroy ~ ngOnDestroy:")
      this.intervalDate = null

  }



}
