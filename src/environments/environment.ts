import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBa8WbKJ_AyScM41HXa4YxcjtfRDzSErCI',
    authDomain: 'angularudemy-864eb.firebaseapp.com',
    databaseURL: 'https://angularudemy-864eb-default-rtdb.firebaseio.com',
    projectId: 'angularudemy-864eb',
    storageBucket: 'angularudemy-864eb.appspot.com',
    messagingSenderId: '837682198869',
    appId: '1:837682198869:web:56d8dfa48108e0bf9517dc',
    measurementId: 'G-MNYSR3K7NK',
  },
};

const app = initializeApp();
const analytics = getAnalytics(app);
