// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBI22tOA5CiJv5TC0pgNGCJK9hi2pmOeMA",
    authDomain: "pakou-stripedemo.firebaseapp.com",
    databaseURL: "https://pakou-stripedemo.firebaseio.com",
    projectId: "pakou-stripedemo",
    storageBucket: "pakou-stripedemo.appspot.com",
    messagingSenderId: "194559234532"
  },
  functionsURL: ' http://localhost:5000/pakou-stripedemo/us-central1',
  stripePublishable: 'pk_test_eYclOb2GE2CHR25o3MuppgxN'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
