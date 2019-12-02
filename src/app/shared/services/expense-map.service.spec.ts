import { TestBed } from '@angular/core/testing';

import { ExpenseMapService } from './expense-map.service';

describe('ExpenseMapService', () => {

  let mockExpense;

  beforeEach(() => {
    mockExpense = [{friendId: 1, expenses: [50]}];
    TestBed.configureTestingModule({})
  });

  it('User adds expense', () => {
    const service: ExpenseMapService = TestBed.get(ExpenseMapService);
    expect(service).toBeTruthy();
    service.addExpense({ friendId: 1, amount: 50 });
    const expenseArr = service.getExpenseMap();
    expect(expenseArr).toEqual(mockExpense);
  });

  it('User adds more than one expense', () => {
    const service: ExpenseMapService = TestBed.get(ExpenseMapService);
    expect(service).toBeTruthy();
    service.addExpense({ friendId: 1, amount: 50 });
    service.addExpense({ friendId: 1, amount: 100 });
    mockExpense[0].expenses.push(100);
    const expenseArr = service.getExpenseMap();
    expect(expenseArr).toEqual(mockExpense);
  });

  it('Settles up - one user settles another', () => {
    const service: ExpenseMapService = TestBed.get(ExpenseMapService);
    expect(service).toBeTruthy();
    mockExpense.push({friendId: 2, expenses: [200]});
    mockExpense[0].settleInfo = [{to: 2,  amount: 50}];
    service.addExpense({ friendId: 1, amount: 50 });
    service.addExpense({ friendId: 2, amount: 200 });

    service.settleUP({friendFrom: 1, friendTo: 2, amount: 50});
    const expenseArr = service.getExpenseMap();
    expect(expenseArr).toEqual(mockExpense);
  });
});
