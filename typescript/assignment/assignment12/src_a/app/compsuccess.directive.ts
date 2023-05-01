import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompsuccess]'
})
export class CompsuccessDirective {

  constructor(public eobhj:ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this.eobhj.nativeElement.style.background='green'
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobhj.nativeElement.style.background='black'
  }
}
