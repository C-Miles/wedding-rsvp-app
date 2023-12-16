import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ParkingMap from "./images/parking_map.png";

function ParkingPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        component="h1"
        gutterBottom
        align="center"
        style={{ marginTop: "3%" }}
      >
        Post 4 Parking Map
      </Typography>

      <Box
        style={{ textAlign: "center", width: isSmallScreen ? "80%" : "95vh" }}
      >
        <img
          alt="Map of parking lot"
          src={ParkingMap}
          style={{ width: "100%", height: "auto" }}
        />

        <Typography variant="subtitle2" style={{ marginTop: "10px" }}>
          Post 4 is located on the North side of the building.
        </Typography>
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          There is no access to Post 4 from the South lot Please pay attention
          to all signs directing you to the correct parking and drop off area.
          Please ensure that your rideshare drivers drop you off at the venue,
          not at the main entrance.
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ marginTop: "10px", marginBottom: "20px" }}
        >
          It is of utmost importance that you arrive during "guest arrival
          time", not earlier.
        </Typography>
      </Box>
    </div>
  );
}

export default ParkingPage;
