import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value == null) {
      return '';
    }

    return value.split('')
      .reverse()
      .join('');
  }

}
