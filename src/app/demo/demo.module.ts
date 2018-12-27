import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeDashboardComponent } from './stripe-dashboard/stripe-dashboard.component';
import { ReadMeComponent } from './read-me/read-me.component';
import {PaymentModule} from '../payment/payment.module';

@NgModule({
  declarations: [StripeDashboardComponent, ReadMeComponent],
  imports: [
    CommonModule,
    PaymentModule
  ]
})
export class DemoModule { }
