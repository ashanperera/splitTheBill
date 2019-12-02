import { Injectable } from '@angular/core';
import { IFriend } from '../models/friend.model';
@Injectable({
  providedIn: 'root'
})
export class ManageFriendsService {
  private friends: IFriend[] = [];

  constructor() { }

  addFriend(name) {
    const person: IFriend = { name, id: this.friends.length + 1 }
    this.friends = [...this.friends, person];
  }

  getFriendList() {
    return this.friends;
  }
}
