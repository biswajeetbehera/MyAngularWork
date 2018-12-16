import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform<T>(value: Array<T>, compareFunction: (a: T, b: T) => number): Array<T> {
    if (value == null) {
      return null;
    }

    return value.sort(compareFunction);
  }

}
