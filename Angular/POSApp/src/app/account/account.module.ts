import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from '../account/account.component';
import { RouterModule } from '@angular/router';
import { accountroutes } from './account.routing';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(accountroutes)
  ]
})
export class AccountModule { }
