import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, filterstring: string, propNameString: string): any {
    if (value == null || filterstring == null) {
      return value;
    }

    return value.filter((val) => val[propNameString] === filterstring);
  }

}
