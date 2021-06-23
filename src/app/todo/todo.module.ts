import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './container/content/content.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';

@NgModule({
  declarations: [ContentComponent, TodoListComponent],
  imports: [SharedModule, CommonModule],
  exports: [ContentComponent],
})
export class TodoModule {}
