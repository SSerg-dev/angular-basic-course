import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post = {
    title: '',
    text: '',
    id: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private postsService: PostsService
  ) {}

  // methods
  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
  ngOnInit(): void {
    // this.post = this.route.snapshot.data['post']
    this.route.data.subscribe((data) => {
      this.post = data['post']
    })
    // this.route.params.subscribe((params: Params) => {
    //   this.post = this.postsService.getById(+params['id'])!;
    // });
  }
}
