require('./app/config');
import * as auth from './app/auth';
//import * as webhooks from './app/webhooks';
//import * as connect from './app/connect';
import * as api from './app/api';

// Main Authenticated User API
//export const app = api;

// Auth Functions
export const createStripeCustomer    = auth.createStripeCustomer;

export const getCharges = api.getCharges;
export const getCustomer = api.getCustomer;
export const attachSource = api.attachSource;
export const createCharge = api.createCharge;

// Webhook Functions
//export const recurringPaymentWebhook = webhooks.recurringPaymentWebhook;

// Connect Functions
//export const stripeRedirect = connect.redirect;
//export const oauthCallback  = connect.callback;



