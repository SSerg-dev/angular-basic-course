import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { delay } from 'rxjs';
import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  loading = false;

  todoTitle = '';
  url = 'https://jsonplaceholder.typicode.com/todos';
  body = {};

  constructor(private todosService: TodosService) {}

  // methods
  removeTodo(id: number | undefined) {
    this.todosService.removeTodo(id)
    .subscribe((response) => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe((todos) => {
        this.todos = todos;
        this.loading = false;
      });
  }
  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };
    console.log("🚀 ~ file: app.component.ts:46 ~ AppComponent ~ newTodo:", newTodo.title)

    this.todosService.addTodo(newTodo)
    .subscribe((todo) => {
      this.todos.unshift(todo);
      this.todoTitle = '';
    });

  }
  ngOnInit(): void {
    this.fetchTodos();
  }
  ngOnDestroy(): void {}
}
