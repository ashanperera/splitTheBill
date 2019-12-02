import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ManageFriendsService } from '../../shared/services/manage-friends.service';
import { ExpenseMapService } from '../../shared/services/expense-map.service';
import { IFriend } from '../../shared/models/friend.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html'
})
export class AddExpenseComponent implements OnInit {
  friendList: IFriend[];
  friendId = 1;
  amount: number;
  @Output() saveExpenses = new EventEmitter();
  constructor(private manageFriendsService: ManageFriendsService, private expenseMapService: ExpenseMapService) { }

  ngOnInit() {
    this.friendList = this.manageFriendsService.getFriendList();
  }

  saveExpense(expenseMap){
    this.expenseMapService.addExpense(expenseMap);
    const expenseList = this.expenseMapService.getExpenseMap();
    this.saveExpenses.emit(expenseList);
  }
}
