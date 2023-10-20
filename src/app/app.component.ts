import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'I want to leaning Angular',
      text: 'I now learnig Angular',
      id: 1,
    },
    {
      title: 'Next block about Angular',
      text: 'Charpts about directives and pipes',
      id: 2,
    },
  ];

  constructor() {}
  // methods
  ngOnInit(): void {
    setTimeout(() => {
      // this.posts[0] = {
      //   title: '...change title',
      //   text: '...change text',
      //   id: 42,
      // };
    });
  }

  removePost(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
