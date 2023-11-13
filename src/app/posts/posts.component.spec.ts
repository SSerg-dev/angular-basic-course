import { HttpClient, HttpHandler } from '@angular/common/http';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { EMPTY, of, throwError } from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;
  let client: HttpClient;
  let handler: HttpHandler;

  beforeEach(() => {
    client = new HttpClient(handler);
    service = new PostsService(client);
    component = new PostsComponent(service);
  });
  it('should be call fetch method in ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
  it('should be call fetch method & return response data', () => {
    const posts = [1, 2, 3, 5, 8, 13];
    // spyOn(service, 'fetch').and.callFake(() => {
    //   return of(posts);
    // });
    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();
    expect(component.posts.length).toBe(posts.length);
    // expect(component.posts.length).toBeGreaterThanOrEqual(1)
  });

  it('should be add a new post', () => {
    const post = {title: 'add a new post'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))
    component.add(post.title)

    expect(spy).toHaveBeenCalled()
    // expect(component.posts.length).toBe(1)
    expect(component.posts.includes(post)).toBeTruthy()
  })

  it('should be get error message', () => {
    const post = {title: 'add a new post'}
    const error = 'error message'
    const spy = spyOn(service, 'create').and.returnValue(throwError(error))

    component.add(post.title)
    expect(component.message).toBe(error)
  })


});
