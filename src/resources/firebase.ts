import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBEw6TdO4STs3cnYUl2SOnyS8GIKe6vD3s',
  authDomain: 'react-pizza-c5cf2.firebaseapp.com',
  projectId: 'react-pizza-c5cf2',
  storageBucket: 'react-pizza-c5cf2.appspot.com',
  messagingSenderId: '718159891460',
  appId: '1:718159891460:web:04a78ea23af36f8c1ff951',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
