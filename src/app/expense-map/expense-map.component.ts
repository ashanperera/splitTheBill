import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-map',
  templateUrl: './expense-map.component.html',
  styleUrls: ['./expense-map.component.scss']
})
export class ExpenseMapComponent {
  expenseList;
  friendsList = [];

  handleFriendsList(value){
    this.friendsList = value;
  }

  handleSaveExpenses(value){
    this.expenseList = value;
    console.log('expenseList',  this.expenseList);
  }

}
