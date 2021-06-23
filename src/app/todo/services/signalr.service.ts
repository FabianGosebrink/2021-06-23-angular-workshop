import { Injectable } from '@angular/core';
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SignalRService {
  private connection: HubConnection;

  private itemUpdatedInternal = new Subject();
  private itemAddededInternal = new Subject();

  get itemUpdated() {
    return this.itemUpdatedInternal.asObservable();
  }

  get itemAdded() {
    return this.itemAddededInternal.asObservable();
  }

  constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl(`${environment.serverUrl}todohub`)
      .configureLogging(LogLevel.Information)
      .build();

    this.registerOnEvents();

    this.connection.start().catch((error) => console.error(error));
  }

  private registerOnEvents() {
    this.connection.on('todo-added', (item) => {
      this.itemAddededInternal.next(item);
    });

    this.connection.on('todo-updated', (item) => {
      this.itemUpdatedInternal.next(item);
    });
  }
}
