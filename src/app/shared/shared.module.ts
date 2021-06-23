import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmDirective } from './directives/confirm.directive';

@NgModule({
  declarations: [ConfirmDirective],
  imports: [CommonModule],
  exports: [ConfirmDirective],
})
export class SharedModule {}
