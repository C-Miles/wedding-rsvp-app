import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const firebaseConfig = {
  apiKey: "AIzaSyBJibi2gHF8dZpr0eXh2ecMKrKo65GzjzE",
  authDomain: "miles-wedding-rsvp.firebaseapp.com",
  projectId: "miles-wedding-rsvp",
  storageBucket: "miles-wedding-rsvp.appspot.com",
  messagingSenderId: "556928472603",
  appId: "1:556928472603:web:654bb91240fc4cbc674abe",
  measurementId: "G-7SQL72SDTK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
