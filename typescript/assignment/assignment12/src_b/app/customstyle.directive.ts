import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(public eobhj:ElementRef) {
    this.eobhj.nativeElement.style.background='yellow'
    this.eobhj.nativeElement.style.fontStyle="italic"
   }
}
