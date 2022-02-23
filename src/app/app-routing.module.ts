import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'bank', 
    loadChildren: () => import('./modules/bank/bank.module').then(m => m.BankModule) 
  }, 
  { 
    path: 'appclient', 
    loadChildren: () => import('./modules/appclient/appclient.module').then(m => m.AppclientModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
