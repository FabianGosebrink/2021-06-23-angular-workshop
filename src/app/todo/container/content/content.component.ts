import { Component, OnInit } from '@angular/core';
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
    this.getAllItems();
  }

  addItem(toAdd: string) {
    this.todoService.addItem(toAdd).subscribe(() => {
      this.getAllItems();
    });
  }

  removeItem(itemToRemove: Todo) {
    this.todoService.removeItem(itemToRemove).subscribe(() => {
      this.getAllItems();
    });
  }

  private getAllItems() {
    this.todoService.getAll().subscribe((result) => {
      this.items = result;
    });
  }
}
