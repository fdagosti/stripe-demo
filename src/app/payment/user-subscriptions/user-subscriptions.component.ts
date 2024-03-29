import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { AuthService } from '../../core/auth.service';
import { SubscriptionPlan } from '../models';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-subscriptions',
  templateUrl: './user-subscriptions.component.html',
  styleUrls: ['./user-subscriptions.component.sass']
})
export class UserSubscriptionsComponent implements OnInit {

  subscriptions$: Observable<any>;

  constructor(public pmt: PaymentService, public auth: AuthService) { }

  ngOnInit() {
    this.subscriptions$ = this.pmt.getCustomer().pipe(
      map(user => user.subscriptions.data )
    )
  }

}
