import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBigNumbers',
  standalone: true,
})
export class FormatBigNumbersPipe implements PipeTransform {
  transform(value: number | string): string {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) {
      return value.toString();
    }

    return num.toLocaleString();
  }
}
