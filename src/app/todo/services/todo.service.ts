import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private url = 'https://sampletodobackend.azurewebsites.net/api/v1/todos';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }

  addItem(itemToAdd: string): Observable<Todo> {
    return this.httpClient.post<Todo>(this.url, { value: itemToAdd });
  }

  removeItem(todoToRemove: Todo) {
    return this.httpClient.delete(`${this.url}/${todoToRemove.id}`);
  }

  updateItem(toUpdate: Todo) {
    return this.httpClient.put(`${this.url}/${toUpdate.id}`, toUpdate);
  }
}
