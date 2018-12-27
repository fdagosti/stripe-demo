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
  console.log("data ",data);

  const userId   = context.auth.uid;

  const sourceId  = data.sourceId;

console.log("source id ",sourceId)

  return helpers.attachSource(userId, sourceId)
});

export const createCharge = functions.https.onCall((data, context ) =>{
  const userId   = context.auth.uid;
  const sourceId = data.sourceId;
  const amount   = data.amount;
  const currency = data.currency;

  console.log("create Charge ",sourceId, amount, currency)

  return helpers.createCharge(userId, sourceId, amount, currency).catch(error => {throw new functions.https.HttpsError('invalid-argument',error)})
})



// POST subscriptions (creates subscription on user account)
app.post('/subscriptions', (req, res) => {
    
    const userId   = req.user.uid;
    const sourceId = req.body.sourceId;
    const planId   = req.body.planId;

    const promise = helpers.createSubscription(userId, sourceId, planId);

    defaultHandler(promise, res)
});

// PUT subscriptions (cancels subscription)
app.put('/subscriptions/cancel', (req, res) => {
    
    const userId   = req.user.uid;
    const planId   = req.body.planId;

    const promise = helpers.cancelSubscription(userId, planId);

    defaultHandler(promise, res)
});


// Default handling of response
function defaultHandler(promise: Promise<any>, res: any): void {
    promise
        .then(data => res.status(200).send(data) )
        .catch(err => res.status(400).send(err) )
}
    
//export const api = functions.https.onRequest(app);
