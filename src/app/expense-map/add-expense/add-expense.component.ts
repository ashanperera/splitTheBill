import { Component, ChangeDetectionStrategy , Output, EventEmitter, Input } from '@angular/core';
import { ManageFriendsService } from '../../shared/services/manage-friends.service';
import { ExpenseMapService } from '../../shared/services/expense-map.service';
import { IFriend } from '../../shared/models/friend.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {
  friendId = 1;
  amount: number;
  @Output() saveExpenses = new EventEmitter();
  @Input() friendsList;

  constructor(private manageFriendsService: ManageFriendsService, private expenseMapService: ExpenseMapService) { }

  saveExpense(expenseMap){
    this.expenseMapService.addExpense(expenseMap);
    const expenseList = this.expenseMapService.getExpenseMap();
    this.saveExpenses.emit(expenseList);
  }
}
