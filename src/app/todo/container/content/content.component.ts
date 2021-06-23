import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  mySuperPoopyItems = ['Groceries', 'Wash Car', 'Pay Bills'];

  isDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  addItem(toAdd: string) {
    this.mySuperPoopyItems.push(toAdd);
  }

  removeItem(itemToRemove: string) {
    this.mySuperPoopyItems = this.mySuperPoopyItems.filter(
      (x) => x !== itemToRemove
    );
  }
}
