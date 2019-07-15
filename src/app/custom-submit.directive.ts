import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[custom-submit]'
})
export class CustomSubmitDirective {

  @Output('custom-submit') customSubmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @HostListener('submit', ['$event'])
  onSubmit(e) {
    e.preventDefault();
    console.log('call this');
    this.customSubmit.emit(e);
  }

}
