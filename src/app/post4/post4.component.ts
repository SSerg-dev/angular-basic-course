import { Component } from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post4">
      <h2>Post 4</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi
        omnis aliquid atque maiores nesciunt pariatur molestias ab quas
        assumenda?
      </p>
    </div>
  `,
  styles: [
    `
      .post4 {
        padding: 0.5rem;
        border: solid 2px #ccc;
      }
      h2 {
        font-size: 1.5rem;
        color: red;
      }
    `,
  ],
})
export class Post4Component {}
