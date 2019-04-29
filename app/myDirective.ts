import { Directive,ElementRef } from '@angular/core';
@Directive({
  selector:'(higlightMe)'
})
export class MyDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor='red';
  }
}