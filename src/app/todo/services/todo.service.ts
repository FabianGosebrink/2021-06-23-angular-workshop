import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${environment.apiUrl}todos`);
  }

  addItem(itemToAdd: string): Observable<Todo> {
    return this.httpClient.post<Todo>(`${environment.apiUrl}todos`, {
      value: itemToAdd,
    });
  }

  removeItem(todoToRemove: Todo) {
    return this.httpClient.delete(
      `${environment.apiUrl}todos/${todoToRemove.id}`
    );
  }

  updateItem(toUpdate: Todo) {
    return this.httpClient.put(
      `${environment.apiUrl}todos/${toUpdate.id}`,
      toUpdate
    );
  }
}
