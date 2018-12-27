import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChargesComponent } from './user-charges/user-charges.component';
import {SharedModule} from '../shared/shared.module';
import { UserSourcesComponent } from './user-sources/user-sources.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';

@NgModule({
  declarations: [UserChargesComponent, UserSourcesComponent, UserSubscriptionsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserChargesComponent,
    UserSourcesComponent,
    UserSubscriptionsComponent
  ],
})
export class PaymentModule { }
