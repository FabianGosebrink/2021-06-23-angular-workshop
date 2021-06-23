import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() items: string[] = [];

  @Output() itemRemoved = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  removeItem(reallyDelete: boolean, itemToRemove: string) {
    if (reallyDelete) {
      this.itemRemoved.emit(itemToRemove);
    }
  }
}
