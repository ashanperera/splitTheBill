import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseMapComponent } from './expense-map.component';

describe('ExpenseMapComponent', () => {
  let component: ExpenseMapComponent;
  let fixture: ComponentFixture<ExpenseMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
