import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank.component';
import { BanklistComponent } from './banklist/banklist.component';

const routes: Routes = [
  { 
    path: '', 
    component: BankComponent ,
    children: [
      {
        path: 'list',
        component: BanklistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
