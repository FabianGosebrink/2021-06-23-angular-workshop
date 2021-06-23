import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../../services/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  items: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((result) => {
      this.items = result;
    });
  }

  addItem(toAdd: string) {
    this.todoService
      .addItem(toAdd)
      .pipe(switchMap(() => this.todoService.getAll()))

      .subscribe((result: Todo[]) => (this.items = result));
  }

  removeItem(itemToRemove: Todo) {
    this.todoService
      .removeItem(itemToRemove)
      .pipe(switchMap(() => this.todoService.getAll()))
      .subscribe((result) => (this.items = result));
  }
}
