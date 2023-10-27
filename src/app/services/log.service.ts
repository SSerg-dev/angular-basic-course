import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  // methods
  log(counter: number) {
    console.log(`log counter: ${counter}`)

  }
}
