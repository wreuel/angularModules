import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppclientRoutingModule } from './appclient-routing.module';
import { AppclientComponent } from './appclient.component';
import { ApplistComponent } from './applist/applist.component';


@NgModule({
  declarations: [
    AppclientComponent,
    ApplistComponent
  ],
  imports: [
    CommonModule,
    AppclientRoutingModule
  ]
})
export class AppclientModule { }
