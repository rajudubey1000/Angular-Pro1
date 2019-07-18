import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrtcurr'
})
export class SqrtcurrPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let newValue = "$ " + Math.sqrt(value);
    return newValue;
  }

}
