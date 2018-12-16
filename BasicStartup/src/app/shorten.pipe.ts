import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable:no-bitwise
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, shortenTill?: number): string {
    if (value == null || value.length < (shortenTill | 10)) {
      return value;
    }
    return value.substr(0, shortenTill | 10) + '...';

  }

}
