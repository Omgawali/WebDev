import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompfailure]'
})
export class CompfailureDirective {

 
  constructor(public eobhj:ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this.eobhj.nativeElement.style.background='red'
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this.eobhj.nativeElement.style.background='black'
  }

}
