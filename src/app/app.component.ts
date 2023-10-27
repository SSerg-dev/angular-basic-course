import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    protected appCounterService: AppCounterService,
    protected localCounterService: LocalCounterService
    ) {

  }

  // methods

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
