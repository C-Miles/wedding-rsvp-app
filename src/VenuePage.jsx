import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Divider, Link, Typography } from "@mui/material";

import DirectionsIcon from "@mui/icons-material/Directions";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";

import NorthFourth from "./images/north_fourth.jpeg";

function VenuePage() {
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
        align="center"
        component="h1"
        gutterBottom
        style={{ marginTop: "3%" }}
        variant={isSmallScreen ? "h4" : "h3"}
      >
        Post 4 at North Fourth Corridor
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
          alt="Venue"
          src={NorthFourth}
          style={{
            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
            height: "auto",
            width: "100%",
          }}
        />
        <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
          580 N 4th St, Columbus, OH 43215
        </Typography>
      </Box>

      <div
        style={{
          marginTop: "10px",
          marginBottom: "25px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=Post+4+North+Fourth"
            underline="hover"
            style={{ display: "flex", alignItems: "center" }}
          >
            Get Directions <DirectionsIcon style={{ marginLeft: "5px" }} />
          </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Link
            href="https://north4thcorridor.com/post-4/"
            underline="hover"
            style={{ display: "flex", alignItems: "center" }}
          >
            Venue Website <WebIcon style={{ marginLeft: "5px" }} />
          </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30%",
          }}
        >
          <Link
            href="tel:+13807997499"
            underline="hover"
            style={{ display: "flex", alignItems: "center" }}
          >
            Call Venue <PhoneIcon style={{ marginLeft: "5px" }} />
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default VenuePage;
