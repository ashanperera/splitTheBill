import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ManageFriendsService } from '../../shared/services/manage-friends.service';
import { ExpenseMapService } from '../../shared/services/expense-map.service';
import { IFriend } from '../../shared/models/friend.model';

@Component({
  selector: 'app-settle-bill',
  templateUrl: './settle-bill.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettleBillComponent {
  friendList: IFriend[];
  friendFrom = 1;
  @Input() friendsList;

  constructor(private manageFriendsService: ManageFriendsService, private expenseMapService: ExpenseMapService) { }

  settleExpense(settleInfo){
    this.expenseMapService.settleUP(settleInfo);
  }

}
