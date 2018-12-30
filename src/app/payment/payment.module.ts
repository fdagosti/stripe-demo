import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChargesComponent } from './user-charges/user-charges.component';
import {SharedModule} from '../shared/shared.module';
import { UserSourcesComponent } from './user-sources/user-sources.component';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { ConnectRedirectComponent } from './connect-redirect/connect-redirect.component';
import {HttpClientModule} from '@angular/common/http';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';

@NgModule({
  declarations: [
    UserChargesComponent,
    UserSourcesComponent,
    UserSubscriptionsComponent,
    PaymentFormComponent,
    SubscriptionPlanComponent,
    ConnectRedirectComponent,
    CheckoutPaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    PaymentFormComponent,
    UserChargesComponent,
    UserSourcesComponent,
    UserSubscriptionsComponent,
    SubscriptionPlanComponent,
    ConnectRedirectComponent,
    CheckoutPaymentComponent
  ],
})
export class PaymentModule { }
