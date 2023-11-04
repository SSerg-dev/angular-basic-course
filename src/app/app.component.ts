import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  todoTitle = '';
  url = 'https://jsonplaceholder.typicode.com/todos';
  body = {};

  constructor(private http: HttpClient) {}

  // methods
  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo = {
      title: this.todoTitle,
      complited: false,
    };

    this.body = newTodo
    this.http.post<Todo>(this.url, this.body)
      .subscribe(todo => {
        console.log("🚀 ~ file: app.component.ts:37 ~ AppComponent ~ todo:", todo)
        this.todos.unshift(todo)
        this.todoTitle = ''

      })
  }
  ngOnInit(): void {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe((todos) => {
        this.todos = todos;


      });
  }
  ngOnDestroy(): void {}
}
