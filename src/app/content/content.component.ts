import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  items = ['Groceries', 'Wash Car', 'Pay Bills'];

  isDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  addItem(toAdd: string) {
    this.items.push(toAdd);
  }

  removeItem(reallyDelete: boolean, itemToRemove: string) {
    if (reallyDelete) {
      this.items = this.items.filter((x) => x !== itemToRemove);
    }
  }
}
