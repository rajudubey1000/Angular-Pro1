import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeadingHighlight]'
})
export class HeadingHighlightDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = "red";
   }

  @HostListener('mouseenter')onMouseEnter(){
    this.highlight('yellow');
  }

  @HostListener('mouseout')onMouseOut(){
    this.highlight('blue');
  }

   highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
