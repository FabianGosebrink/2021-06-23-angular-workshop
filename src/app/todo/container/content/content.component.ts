import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../../services/signalr.service';
import { Todo } from '../../services/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  items: Todo[];

  constructor(
    private todoService: TodoService,
    signalRService: SignalRService
  ) {
    signalRService.itemAdded.subscribe((item: Todo) => this.items.push(item));
    signalRService.itemUpdated.subscribe((item: Todo) => {
      this.items = this.items.filter((x) => x.id !== item.id);
      this.items.push(item);
    });

    signalRService.itemDeleted.subscribe((id: string) => {
      this.items = this.items.filter((x) => x.id !== id);
    });
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((result) => (this.items = result));
  }

  addItem(toAdd: string) {
    this.todoService.addItem(toAdd).subscribe();
  }

  removeItem(itemToRemove: Todo) {
    this.todoService.removeItem(itemToRemove).subscribe();
  }

  markedAsDone(item: Todo) {
    this.todoService.updateItem(item).subscribe();
  }
}
