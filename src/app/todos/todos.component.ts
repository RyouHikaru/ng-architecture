import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  title = 'Todos';
  todos: any;

  constructor(private todoService: TodosService) {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}
