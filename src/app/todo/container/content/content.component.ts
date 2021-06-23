import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  mySuperPoopyItems: string[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  addItem(toAdd: string) {
    this.todoService.addItem(toAdd);
    this.getAllItems();
  }

  removeItem(itemToRemove: string) {
    this.todoService.removeItem(itemToRemove);
    this.getAllItems();
  }

  private getAllItems() {
    this.mySuperPoopyItems = this.todoService.getAll();
  }
}
