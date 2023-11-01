import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  appState = 'off'
  constructor() {}

  // methods
  handlerChange() {
    console.log("🚀 ~ file: app.component.ts:16 ~ AppComponent ~ handlerChange ~ this.appState:", this.appState)
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
