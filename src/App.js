import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationWrapper from "./NavigationWrapper";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FAQPage from "./FAQPage";
import LandingPage from "./LandingPage";
import ParkingPage from "./ParkingPage";
import RSVP from "./RSVP";
import StoryPage from "./StoryPage";
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
    path: "/faq",
    element: (
      <NavigationWrapper>
        <FAQPage />
      </NavigationWrapper>
    ),
  },
  {
    path: "/story",
    element: (
      <NavigationWrapper>
        <StoryPage />
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

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", cursive',
        },
      },
    },
  },
});

function App({ style }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={style}>
        <Container
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
          maxWidth={false}
        >
          <RouterProvider router={router} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
