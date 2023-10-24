import { Component, OnInit, OnDestroy } from '@angular/core';

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

  search = '';
  searchField = 'title';

  posts: Post[] = [
    { title: 'beer', text: 'the best beer' },
    { title: 'beer light', text: 'the best beer' },
    { title: 'vodke', text: 'the best vodka' },
    { title: 'rom', text: 'text best rom' },
    { title: 'tekilla', text: 'text best tekilla' },
    { title: 'coniac', text: 'text best coniac' },
  ];

  constructor() {}

  // methods
  ngOnInit(): void {
    this.intervalDate = setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
  ngOnDestroy(): void {
    this.intervalDate = null;
  }
}
