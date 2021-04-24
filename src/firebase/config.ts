import firebase from 'firebase/app';

import 'firebase/analytics';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBNLOVLZZa57Z6EOUajuHhwYEm2CWn14Hc',
	authDomain: 'skerl-c3a2d.firebaseapp.com',
	projectId: 'skerl-c3a2d',
	storageBucket: 'skerl-c3a2d.appspot.com',
	messagingSenderId: '890732728128',
	appId: '1:890732728128:web:0fa89058a5a0c0a825f4a5',
	measurementId: 'G-JZKP9BDKN6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
