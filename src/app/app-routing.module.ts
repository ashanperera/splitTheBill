import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseMapComponent } from './expense-map/expense-map.component';

const routes: Routes = [
{ path: 'expense-map', component: ExpenseMapComponent },
{ path: '', redirectTo: '/expense-map', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
