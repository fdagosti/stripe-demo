import * as functions from 'firebase-functions';
import * as helpers from './helpers';
import * as connect from './connect';
import { app } from './config';

export const getCharges = functions.https.onCall((data, context) => {
  const userId = context.auth.uid;
  return helpers.getUserCharges(userId)
});

export const getCustomer = functions.https.onCall((data, context) => {
  const userId   = context.auth.uid;
  return  helpers.getCustomer(userId);
});

export const attachSource = functions.https.onCall((data, context) => {
  const userId   = context.auth.uid;
  const sourceId  = data.sourceId;
  return helpers.attachSource(userId, sourceId)
});

export const createCharge = functions.https.onCall((data, context ) =>{
  const userId   = context.auth.uid;
  const sourceId = data.sourceId;
  const amount   = data.amount;
  const currency = data.currency;

  return helpers.createCharge(userId, sourceId, amount, currency)
    .catch(error => {throw new functions.https.HttpsError('invalid-argument',error)})
})


export const attachSubscription = functions.https.onCall((data, context ) =>{
  const userId   = context.auth.uid;
  const sourceId = data.sourceId;
  const planId   = data.planId;

  return helpers.createSubscription(userId, sourceId, planId);
});

export const cancelSubscription = functions.https.onCall((data, context ) =>{
  const userId   = context.auth.uid;
  const planId   = data.planId;

  return helpers.cancelSubscription(userId, planId);
});


// Default handling of response
function defaultHandler(promise: Promise<any>, res: any): void {
    promise
        .then(data => res.status(200).send(data) )
        .catch(err => res.status(400).send(err) )
}
    
//export const api = functions.https.onRequest(app);
