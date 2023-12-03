import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationWrapper from "./NavigationWrapper";
import { Container } from "@mui/material";

import LandingPage from "./LandingPage";
import ParkingPage from "./ParkingPage";
import RSVP from "./RSVP";
import TravelPage from "./TravelPage";
import VenuePage from "./VenuePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/rsvp",
    element: (
      <NavigationWrapper>
        <RSVP />
      </NavigationWrapper>
    ),
  },
  {
    path: "/location",
    element: (
      <NavigationWrapper>
        <VenuePage />
      </NavigationWrapper>
    ),
  },
  {
    path: "/travel",
    element: (
      <NavigationWrapper>
        <TravelPage />
      </NavigationWrapper>
    ),
  },
  {
    path: "/parking",
    element: (
      <NavigationWrapper>
        <ParkingPage />
      </NavigationWrapper>
    ),
  },
]);

function App() {
  return (
    <div>
      <Container
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          // justifyContent: "center",
          padding: 0,
        }}
        maxWidth={false}
      >
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
