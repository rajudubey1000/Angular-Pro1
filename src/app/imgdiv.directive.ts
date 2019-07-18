import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appimgdiv]'
})
export class ImgdivDirective {

  constructor(private readonly viewRef: ViewContainerRef, private readonly templateRef: TemplateRef<RangeContext>) { }


  @Input()
  set appRange(value: [number, number] | number) {
    this.viewRef.clear();

    const [from, to] = Array.isArray(value) ? value : [0, value];
    const range = this.generateRange(from, to);

    range.forEach(
      (itemNumber, index) => this.viewRef.createEmbeddedView(this.templateRef, {
        $implicit: itemNumber,
        index,
        first: index === 0,
        last: index + 1 === range.length,
      })
    );
  }


  private generateRange(from: number = 0, to: number): number[] {
    return Array.from({length: (to - from)}, (_, index) => index + from);
  }


}


interface RangeContext {
  $implicit: number; // current item exposed as implicit value, enables declaring in template variable via let keyword
  index: number;     // current index of the item
  first: boolean;    // indicates if the item is first in the collection
  last: boolean;     // indicates if the item is last in the collection
}



