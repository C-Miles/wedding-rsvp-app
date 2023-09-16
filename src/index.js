import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
  measurementId: "G-7SQL72SDTK"
};

const app = initializeApp(firebaseConfig);

// function writeGuestData(guestId, firstName, LatName) {
  // const db = getDatabase();
  // const db = getFirestore(app);

//   const reference = ref(db, 'guests/' + guestId);

//   set(reference, {
//     guestFirstName: firstName,
//     guestLastName: LatName,
//   })
// }

// writeGuestData("milesID", "Chris", "Miles")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
