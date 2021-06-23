import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() items: Todo[] = [];

  @Output() itemRemoved = new EventEmitter<Todo>();
  @Output() markedAsDone = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  removeItem(reallyDelete: boolean, itemToRemove: Todo) {
    if (reallyDelete) {
      this.itemRemoved.emit(itemToRemove);
    }
  }

  markAsDone(item: Todo) {
    const clone = { ...item };
    clone.done = !item.done;
    this.markedAsDone.emit(clone);
  }
}
