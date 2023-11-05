import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';

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
    return this.http.put<Todo>(`${this.url}/${id}`, {
      completed: true
    })
  }
  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo)
  }
  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
     'https://jsonplaceholder.typicode.com/todos?_limit=2'
   )
   .pipe(
    delay(1000),
    // catchError((error) => {
    //   console.log("🚀 ~ catchError ~ error:", error)
    //   return throwError(error)

    // })
    )

 }

}
