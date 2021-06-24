import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixZero',
})
export class PrefixZeroPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let formated;
    if (value < 10) {
      formated = '0' + value;
      return formated;
    }
    return value;
  }
}
