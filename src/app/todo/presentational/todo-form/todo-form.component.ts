import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter();

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      todoValue: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  addItem() {
    if (!this.formGroup.valid) {
      return;
    }

    const valueToSend = this.formGroup.value?.todoValue;

    this.todoAdded.emit(valueToSend);
    this.formGroup.reset();
  }
}
