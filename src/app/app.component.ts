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
  error = ''

  url = 'https://jsonplaceholder.typicode.com/todos';
  body = {};

  constructor(private todosService: TodosService) {}

  // methods
  completeTodo(id: number | undefined) {
    if (!id) {
      return;
    }
    this.todosService.completeTodo(id)
    .subscribe((response) => {
      this.todos.find((todo) => todo.id === id)!.completed = true
    })
  }
  removeTodo(id: number | undefined) {
    if (!id) {
      return;
    }

    this.todosService.removeTodo(id).subscribe((response) => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }
  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.todosService.addTodo(newTodo).subscribe((todo) => {
      this.todos.unshift(todo);
      this.todoTitle = '';
    });
  }
  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos().subscribe((todos) => {
      this.todos = todos;
      this.loading = false;
    },
    error => {
      console.log('error:', error.message)
      this.error = error.message
    },
    // () => {
    //   console.log('complete')
    // }
    );
  }
  ngOnInit(): void {
    this.fetchTodos();
  }
  ngOnDestroy(): void {}
}
