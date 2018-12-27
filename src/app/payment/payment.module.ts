import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChargesComponent } from './user-charges/user-charges.component';
import {SharedModule} from '../shared/shared.module';
import { UserSourcesComponent } from './user-sources/user-sources.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [UserChargesComponent, UserSourcesComponent, UserSubscriptionsComponent, PaymentFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PaymentFormComponent,
    UserChargesComponent,
    UserSourcesComponent,
    UserSubscriptionsComponent
  ],
})
export class PaymentModule { }
