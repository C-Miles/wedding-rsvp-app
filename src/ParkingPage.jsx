import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Divider, Typography } from "@mui/material";

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

      <Divider
        style={{
          width: "80%",
          marginBottom: "25px",
          backgroundColor: "#2d2d2d",
        }}
      />

      <Box
        style={{ textAlign: "center", width: isSmallScreen ? "80%" : "800px" }}
      >
        <img
          alt="Map of parking lot"
          src={ParkingMap}
          style={{
            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
            height: "auto",
            width: "100%",
          }}
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
