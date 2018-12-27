import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripe'
})
export class StripePipe implements PipeTransform {

  transform(value: number): number {
    return value ? value / 100 : 0
  }

}
