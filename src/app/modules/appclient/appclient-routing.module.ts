import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppclientComponent } from './appclient.component';
import { ApplistComponent } from './applist/applist.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppclientComponent,
    children: [
      {
        path: 'list',
        component: ApplistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppclientRoutingModule { }
