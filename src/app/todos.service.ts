import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, tap, throwError } from 'rxjs';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  body = {};

  constructor(private http: HttpClient) {}

  // methods
  completeTodo(id: number): Observable<Object> {
    return this.http.put<Todo>(
      `${this.url}/${id}`,
      { completed: true },
      { responseType: 'json' }
    );
  }
  removeTodo(id: number): Observable<any> {
    return this.http
      .delete<void>(`${this.url}/${id}`, {
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent) {
            console.log('🚀 ~ file: todos.service.ts:38 ~ tap ~ Sent:', event);
          }
          if (event.type === HttpEventType.Response) {
            console.log(
              '🚀 ~ file: todos.service.ts:41 ~ tap ~ Respose:',
              event
            );
          }
        })
      );
  }
  addTodo(todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      CustomFirstHeader: Math.random().toString(),
    });
    return this.http.post<Todo>(this.url, todo, {
      // headers: new HttpHeaders({
      //   'CustomSecondHeader': Math.random().toString()
      // })
      headers,
    });
  }
  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'customparam');

    return (
      this.http
        // .get<Todo[]>(this.url, {
        .get<any>(this.url, {
          // params: new HttpParams().set('_limit', '3')
          params,
          observe: 'response',
        })
        .pipe(
          map((response) => {
            return response.body;
          }),
          delay(1000)
          // catchError((error) => {
          //   return throwError(error)
          // })
        )
    );
  }
}
