import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private url = 'https://sampletodobackend.azurewebsites.net/api/v1/todos';
  private itemsInternal = ['Groceries', 'Wash Car', 'Pay Bills'];

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url).pipe(
      tap((result) => console.log(result)),
      map((result: Todo[]) => {
        result.forEach((item) => {
          item.value = `New ${item.value}`;
        });

        return result;
      })
    );
  }

  addItem(itemToAdd: string) {
    this.itemsInternal.push(itemToAdd);
  }

  removeItem(itemToRemove: string) {
    this.itemsInternal = this.itemsInternal.filter((x) => x !== itemToRemove);
  }
}
