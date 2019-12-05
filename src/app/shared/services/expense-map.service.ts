import { Injectable } from '@angular/core';
import { IExpenseMap } from '../models/expenseMap.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseMapService {

  private expenseMap = [];

  constructor() { }

  getPerson(friendId: number): IExpenseMap | boolean {
    if (this.expenseMap) {
      const foundEntry: IExpenseMap[] = this.expenseMap.filter(friend => friend.friendId == friendId);
      return foundEntry.length > 0 ? foundEntry[0] : false;
    } else {
      return false;
    }
  }

  addExpense(currentExpense: {friendId: number, amount: number}) {
    const foundEntry = this.getPerson(currentExpense.friendId);
    if (foundEntry) {
      const tempArr = [...this.expenseMap];
      const index = tempArr.indexOf(foundEntry);
      // the can be handled by immutable.js , rather I added this as this is a small functionality of simple immutable Arr
      tempArr[index].expenses = [...tempArr[index].expenses, currentExpense.amount];
      this.expenseMap = tempArr;
    } else {
      const expenseMap: IExpenseMap  = { friendId: currentExpense.friendId, expenses: [currentExpense.amount] };
      this.expenseMap = [...this.expenseMap, expenseMap];
    }
  }

  settleUP(settleInfo: {friendFrom: number, friendTo: number, amount: number}){
    const foundEntry = this.getPerson(settleInfo.friendFrom);
    if (foundEntry) {
      const tempArr = [...this.expenseMap];
      const index = tempArr.indexOf(foundEntry);
      if(tempArr[index].settleInfo) {
        tempArr[index].settleInfo = [...tempArr[index].settleInfo, {to: settleInfo.friendTo,  amount: settleInfo.amount}];
      } else {
        tempArr[index].settleInfo = [{to: settleInfo.friendTo,  amount: settleInfo.amount}];
      }
      this.expenseMap = tempArr;
      console.log('expenseList with settleInfo',  this.expenseMap);
    }
  }

  getExpenseMap() {
    return this.expenseMap;
  }
}
