import {Component, HostListener, OnInit} from '@angular/core';
import {PaymentService} from '../payment.service';
import {environment} from '../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.sass']
})
export class CheckoutPaymentComponent implements OnInit {

  constructor(private pmt:PaymentService) { }

  handler: any;
  amount = 500;

  loading = false;

  error = '';
  result = '';

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripePublishable,
      locale: 'auto',
      source: source => {
        this.loading = true;
        this.error = '';
        this.result = '';
        this.pmt.createChargeFromSourceId(source.id, this.amount)
        .subscribe((res:any) => {
          console.log("result ",res)
          this.loading = false;
          this.error = '';
          this.result = res;
        },
          err => {
          console.log("error ",err)
          this.loading = false;
          this.error = err
        });
      }
    });
  }

  showExpressWindow(){
    this.handler.open({
      name: 'Demo Checkout Payment',
      image: '/assets/stripe.png',
      description: 'Deposit Funds to Account',
      amount: this.amount
    });
  }
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close()
  }

}
