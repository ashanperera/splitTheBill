import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getpersonname'})
export class GetPersonName implements PipeTransform {
  transform(friendId, friendList): string {
    const filteredArr =  friendList.filter(friend => friend.id == friendId);
    if( filteredArr.length > 0 ){
      return filteredArr[0].name;
    } else {
      return null;
    }
  }
}