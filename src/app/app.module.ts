import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseMapComponent } from './expense-map/expense-map.component';
import { AddFriendComponent } from './expense-map/add-friend/add-friend.component';
import { AddExpenseComponent } from './expense-map/add-expense/add-expense.component';
import { GetTotalPipe } from './shared/pipes/getTotal.pipe';
import { GetPersonName } from './shared/pipes/getPersonName.pipe';
import { SettleBillComponent } from './expense-map/settle-bill/settle-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseMapComponent,
    AddFriendComponent,
    AddExpenseComponent,
    GetTotalPipe,
    GetPersonName,
    SettleBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
