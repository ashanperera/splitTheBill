import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'gettotal', pure: false})
export class GetTotalPipe implements PipeTransform {
  transform(expenseArr: number[]): number {
      return expenseArr.reduce((total, currentVal) =>
        total + currentVal, 0);
  }
}