import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {switchMap, map, tap} from 'rxjs/operators';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Customer, Source, Charge, SubscriptionPlan, StripeObject } from './models';
import {from, Observable} from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  readonly api = `${environment.functionsURL}/app`;

  private stripe = Stripe(environment.stripePublishable);
  elements: any;

  constructor(private fun: AngularFireFunctions) {
    this.elements = this.stripe.elements()
    if (!environment.production) {
      // @ts-ignore
      this.fun.functions.useFunctionsEmulator('http://localhost:5000');
    }
  }

  ///// RETRIEVE DATA ////

  // Get customer data
  getCustomer(): Observable<Customer> {
    return this.fun.httpsCallable('getCustomer')({}).pipe(
      tap(data => console.log("11 data ",data)),
    );
  }

  // Get a list of charges
  getCharges(): Observable<Charge[]> {
    return this.fun.httpsCallable('getCharges')({}).pipe(
      map(res => res.data)
      tap(data => console.log("1 data ",data)),
    );
  }


  ///// PAYMENT ACTIONS ////


  createCharge(card: any, amount: number): Observable<Charge> {
    const url = `${this.api}/charges/`;

    return from<Source>( this.stripe.createSource(card) ).pipe(
      switchMap(data => {
        return this.fun.httpsCallable('createCharge')({ amount, sourceId: data.source.id });
      })
    )
  }

  // Saves a payment source to the user account that can be charged later
  attachSource(card: any): Observable<Source> {
    const url = `${this.api}/sources/`;

    return from<Source>( this.stripe.createSource(card) ).pipe(
      switchMap(data => {
        return this.fun.httpsCallable('attachSource')({ sourceId: data.source.id })
      })
    )
  }


  ///// SUBSCRIPTION ACTIONS ////

  // Attaches subscription to user (Stripe will charge the source)
  attachSubscription(sourceId: string, planId: string): Observable<SubscriptionPlan> {
    const url = `${this.api}/subscriptions`;

    return this.fun.httpsCallable('attachSubscription')({ sourceId, planId });
  }

  // Cancels subscription
  cancelSubscription(planId: string): Observable<SubscriptionPlan> {
    const url = `${this.api}/subscriptions/cancel`;

    return this.fun.httpsCallable('cancelSubscription')({ planId });
  }


}
