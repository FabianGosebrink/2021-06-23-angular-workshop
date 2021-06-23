import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private itemsInternal = ['Groceries', 'Wash Car', 'Pay Bills'];

  constructor() {}

  getAll(): string[] {
    return this.itemsInternal;
  }

  addItem(itemToAdd: string) {
    this.itemsInternal.push(itemToAdd);
  }

  removeItem(itemToRemove: string) {
    this.itemsInternal = this.itemsInternal.filter((x) => x !== itemToRemove);
  }
}
