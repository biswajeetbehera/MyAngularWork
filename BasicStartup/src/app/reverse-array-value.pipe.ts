import { ReverseStringPipe } from './reverse-string.pipe';
import { Pipe, PipeTransform } from '@angular/core';

const reverseStringObj = new ReverseStringPipe();
@Pipe({
  name: 'reverseArrayValue'
})
export class ReverseArrayValuePipe implements PipeTransform {

  transform<T>(value: Array<T>, propName: string): Array<T> {
    if (value == null) {
      return null;
    }
    return value.map(val => reverseStringObj.transform(val[propName]));

  }

}
