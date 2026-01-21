import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state(
        'start',
        style({
          background: 'yellow',
        })
      ),
      state(
        'end',
        style({
          background: 'salmon',
          transform: 'scale(1.2)',
        })
      ),
      state(
        'special',
        style({
          background: 'orange',
          transform: 'scale(0.5)',
          borderRadius: '50%',
        })
      ),

      transition('start => end', animate(500)),
      transition('end => start', animate('500ms ease-in-out')),
      transition('start => special', animate('500ms')),
    ]),
  ],
})
export class AppComponent {
  boxState = 'start';

  // methods
  setSpecialState() {
    this.boxState = 'special';
  }
  animate() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
}
