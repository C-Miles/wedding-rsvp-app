import React from "react";

// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

import NorthFourth from "./images/north_fourth.jpeg";

function VenuePage() {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: '100vh'
      }}
    >
      <img alt="Venue" src={NorthFourth} style={{width: '100vh'}} />

    </div>
  );
}

export default VenuePage;
