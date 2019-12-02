import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ManageFriendsService } from '../../shared/services/manage-friends.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {

  @Output() saveFriendsList = new EventEmitter();
  constructor(private manageFriendsService: ManageFriendsService) { }

  ngOnInit() {
  }

  saveEvent(event: {name: string}) {
    this.manageFriendsService.addFriend(event.name);
    const list = this.manageFriendsService.getFriendList();
    this.saveFriendsList.emit(list);
  }

}
