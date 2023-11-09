import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Post, PostsService } from '../posts.service';
import { Observable, delay, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post> {
  result: any;

  constructor(private postsService: PostsService) {}

  // metods
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Post | Observable<Post> | Promise<Post> {
    this.result = of(this.postsService.getById(+route.params['id']))
    .pipe(
      delay(2000)
    );
    return this.result;
  }
}
