import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAxcCudnOdYCABEmDaVFOWVpgsRv3CgXmw',
  authDomain: 'react-admin-dev-d5170.firebaseapp.com',
  projectId: 'react-admin-dev-d5170',
  storageBucket: 'react-admin-dev-d5170.appspot.com',
  messagingSenderId: '314108182741',
  appId: '1:314108182741:web:2733ade081f339d881e25c'
});

export const auth = app.auth();

export default app;