import { TestBed } from '@angular/core/testing';

import { ExpenseMapService } from './expense-map.service';

describe('ExpenseMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseMapService = TestBed.get(ExpenseMapService);
    expect(service).toBeTruthy();
  });
});
