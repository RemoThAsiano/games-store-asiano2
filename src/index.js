import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './store/CartContextProvider';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYCl7EyDZkTLyemNAIsw3jBZzjALximMs",
  authDomain: "games-store-58595.firebaseapp.com",
  projectId: "games-store-58595",
  storageBucket: "games-store-58595.appspot.com",
  messagingSenderId: "112939231581",
  appId: "1:112939231581:web:7229d87f4b9cbf59c4a0b4"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//Englobar  en <App>

