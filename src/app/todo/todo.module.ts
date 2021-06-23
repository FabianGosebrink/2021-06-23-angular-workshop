import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './container/content/content.component';
import { TodoFormComponent } from './presentational/todo-form/todo-form.component';
import { TodoListComponent } from './presentational/todo-list/todo-list.component';

@NgModule({
  declarations: [ContentComponent, TodoListComponent, TodoFormComponent],
  imports: [SharedModule, CommonModule],
  exports: [ContentComponent],
})
export class TodoModule {}