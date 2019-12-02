import { Injectable } from '@angular/core';
import { IExpenseMap } from '../models/expenseMap.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseMapService {

  private expenseMap: any[] = [];

  constructor() { }

  getPerson(friendId: number): IExpenseMap | boolean {
    const foundEntry: IExpenseMap[] = this.expenseMap.filter(friend => friend.friendId == friendId);
    return foundEntry.length > 0 ? foundEntry[0] : false;

  }

  addExpense(currentExpense: {friendId: number, amount: number}) {
    const foundEntry = this.getPerson(currentExpense.friendId);
    if (foundEntry) {
      const index = this.expenseMap.indexOf(foundEntry);
      this.expenseMap[index].expenses.push(currentExpense.amount);
    } else {
      const expenseMap: IExpenseMap  = { friendId: currentExpense.friendId, expenses: [currentExpense.amount] };
      this.expenseMap.push(expenseMap);
    }
  }

  settleUP(settleInfo: {friendFrom: number, friendTo: number, amount: number}){
    const foundEntry = this.getPerson(settleInfo.friendFrom);
    if (foundEntry) {
      const index = this.expenseMap.indexOf(foundEntry);
      if(this.expenseMap[index].settleInfo){
        this.expenseMap[index].settleInfo.push({to: settleInfo.friendTo,  amount: settleInfo.amount});
      } else {
        this.expenseMap[index].settleInfo = [{to: settleInfo.friendTo,  amount: settleInfo.amount}];
      }
    }
  }

  getExpenseMap(){
    return this.expenseMap;
  }
}
