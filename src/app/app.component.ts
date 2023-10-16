import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  posts: Post[] = [
    {title: 'I want to leaning Angular', text: 'I now learnig Angular', id: 1},
    {title: 'Next block about Angular', text: 'Charpts about directives and pipes', id: 2}
  ]

  constructor() {}
  // methods
}
