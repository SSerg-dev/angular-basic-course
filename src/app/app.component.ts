import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

e: number = Math.E
str: string = 'hello world'

  constructor() {}
  // methods
  ngOnInit(): void {}

}
