import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

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
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo)
  }
  fetchTodos(): Observable<Todo[]> {
     return this.http.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=2'
    )
    .pipe(delay(1000))
  }
  removeTodo(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
