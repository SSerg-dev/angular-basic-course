import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {

  counter = 0;

  constructor() {}
  // methods
  increase() {
    this.counter++;
  }
  decrease() {
    this.counter--;
  }
}
