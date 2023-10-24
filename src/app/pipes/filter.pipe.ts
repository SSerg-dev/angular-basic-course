import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(
    posts: Post[],
    search = '',
    field= 'title'
  ): Post[] {
    if (!search.trim()) {
      return posts;
    } else {
      return posts.filter((post: any) => {
        return post[field]
          .toLocaleUpperCase()
          .includes(search.toLocaleUpperCase());

      });
    }
    // else {
    //   return posts.filter((post) => post.title === search)
    // }
  }
}
