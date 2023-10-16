import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [1, 1, 2, 3, 5, 8, 13];
  objects = [
    {
      title: 'post #1',
      author: 'Sergei',
      comments: [
        { name: 'Max', text: 'lorem 1' },
        { name: 'Inna', text: 'lorem 2' },
        { name: 'Evgeniia', text: 'lorem 3' },
      ],
    },
    {
      title: 'post #2',
      author: 'Sergei 2',
      comments: [
        { name: 'Max 2', text: 'lorem 1' },
        { name: 'Inna 2', text: 'lorem 2' },
        { name: 'Evgeniia 2', text: 'lorem 3' },
      ],
    },
  ];

  constructor() {}

  // methods
}
