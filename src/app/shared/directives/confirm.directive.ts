import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
})
export class ConfirmDirective {
  @HostListener('click', []) onClick() {
    this.itemClicked();
  }

  @Output() reallyDelete = new EventEmitter();

  itemClicked() {
    const reallyRemove = confirm('Do you really want to delete?');

    this.reallyDelete.emit(reallyRemove);
  }
}
