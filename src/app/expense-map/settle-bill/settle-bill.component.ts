import { Component, OnInit } from '@angular/core';
import { ManageFriendsService } from '../../shared/services/manage-friends.service';
import { ExpenseMapService } from '../../shared/services/expense-map.service';
import { IFriend } from '../../shared/models/friend.model';

@Component({
  selector: 'app-settle-bill',
  templateUrl: './settle-bill.component.html'
})
export class SettleBillComponent implements OnInit {
  friendList: IFriend[];;
  friendFrom = 1;

  constructor(private manageFriendsService: ManageFriendsService, private expenseMapService: ExpenseMapService) { }

  ngOnInit() {
    this.friendList = this.manageFriendsService.getFriendList();
  }

  settleExpense(settleInfo){
    this.expenseMapService.settleUP(settleInfo);
  }

}
