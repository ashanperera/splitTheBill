import { TestBed } from '@angular/core/testing';

import { ManageFriendsService } from './manage-friends.service';

describe('AddFriendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageFriendsService = TestBed.get(ManageFriendsService);
    expect(service).toBeTruthy();
  });
});
