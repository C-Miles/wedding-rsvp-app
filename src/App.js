import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";

import LandingPage from "./LandingPage";
import RSVP from "./RSVP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "rsvp",
    element: <RSVP />,
  },
]);

function App() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
