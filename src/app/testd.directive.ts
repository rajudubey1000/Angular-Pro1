import { Directive, ElementRef, Input, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTestd]'
})
export class TestdDirective {
  @Input('displayTxt') highlightColor: string;
  
  constructor(private Element: ElementRef) { 
    console.log(Element);
  }

  @HostListener('mouseenter')onMouseEnter(){
    this.printTxt(this.highlightColor || 'night');
  }

  @HostListener('mouseout')onMouseOut(){
    this.printTxt(this.highlightColor ||'night');
  }

   printTxt(txt: string) {
    this.Element.nativeElement.innerText="good " + txt + " world. i am girish. ";
  }

}
