import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class AppCounterService {
  counter = 0;

  constructor(protected logService: LogService) {

  }

  // methods
  increase() {
    this.counter++;
    this.logService.log(this.counter)
  }
  decrease() {
    this.counter--;
    this.logService.log(this.counter)
  }
}
