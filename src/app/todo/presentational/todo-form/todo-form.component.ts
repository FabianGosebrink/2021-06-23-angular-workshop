import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addItem(valueToAdd: string) {
    if (!valueToAdd) {
      return;
    }

    this.todoAdded.emit(valueToAdd);
  }
}
