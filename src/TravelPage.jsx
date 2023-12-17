import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Box, Divider, Link, Typography } from "@mui/material";

import DirectionsIcon from "@mui/icons-material/Directions";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";

import JohnGlenn from "./images/john_glenn.avif";

function TravelPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const hotels = [
    {
      name: "Moxey Columbus Short North",
      url: "https://www.marriott.com/en-us/hotels/cmhox-moxy-columbus-short-north/overview/",
    },
    {
      name: "Le Meridien Columbus",
      url: "https://www.marriott.com/en-us/hotels/cmhdm-le-meridien-columbus-the-joseph/overview/",
    },
    {
      name: "Graduate Columbus",
      url: "https://graduatehotels.com/columbus/",
    },
    {
      name: "Hilton Columbus Downtown",
      url: "https://www.hilton.com/en/locations/usa/ohio/columbus/hilton-hotels/",
    },
    {
      name: "Hampton Inn & Suites Columbus Downtown",
      url: "https://www.reservationcounter.com/hotels/show/60a9749/hampton-inn-and-suites-columbus-downtown/",
    },
    {
      name: "Courtyard Columbus Downtown",
      url: "https://www.marriott.com/en-us/hotels/cmhcy-courtyard-columbus-downtown/overview/",
    },
    {
      name: "Sonesta Columbus Downtown",
      url: "https://www.sonesta.com/sonesta-hotels-resorts/oh/columbus/sonesta-columbus-downtown",
    },
    {
      name: "Renaissance Columbus Downtown",
      url: "https://www.marriott.com/en-us/hotels/cmhbr-renaissance-columbus-downtown-hotel/overview/",
    },
    {
      name: "Hyatt Regency Columbus",
      url: "https://www.hyatt.com/en-US/hotel/ohio/hyatt-regency-columbus/cmhrc",
    },
  ];

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingBottom: '30px',
      }}
    >
      <Typography
        align="center"
        component="h1"
        gutterBottom
        style={{ marginTop: "3%" }}
        variant={isSmallScreen ? "h4" : "h3"}
      >
        Hotels
      </Typography>
      <Divider
        style={{
          backgroundColor: "#2d2d2d",
          marginBottom: "25px",
          width: "80%",
        }}
      />

      {hotels.map((hotel, index) => (
        <Link
          key={index}
          href={hotel.url}
          variant="subtitle1"
          style={{ marginBottom: "15px", textDecoration: "none" }}
          underline="hover"
        >
          {hotel.name}
        </Link>
      ))}

      <Typography
        variant={isSmallScreen ? "h6" : "h4"}
        component="h2"
        gutterBottom
        style={{ marginTop: "20px" }}
      >
        John Glenn International Airport
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        align="center"
        gutterBottom
        style={{ wordWrap: "break-word" }}
      >
        Conveniently located 7 miles from Downtown/Venue location
      </Typography>
      <Divider
        style={{
          backgroundColor: "#2d2d2d",
          marginBottom: "25px",
          width: "80%",
        }}
      />

      <Box
        style={{ textAlign: "center", width: isSmallScreen ? "80%" : "800px" }}
      >
        <img
          src={JohnGlenn}
          alt="airport"
          style={{
            boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
            height: "auto",
            width: "100%",
          }}
        />
      </Box>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            alignItems: "center",
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <Link
            href="https://www.google.com/maps/dir//John+Glenn+Columbus+International+Airport,+4600+International+Gateway,+Columbus,+OH+43219/@40.1242255,-83.0875063,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883862113489cee3:0xa07d02c8c11064c1!2m2!1d-82.8871767!2d39.9999399?entry=ttu"
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
            alignItems: "center",
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <Link
            href="https://flycolumbus.com/"
            underline="hover"
            style={{ display: "flex", alignItems: "center" }}
          >
            Airport Website <WebIcon style={{ marginLeft: "5px" }} />
          </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            alignItems: "center",
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <Link
            href="tel:+16142394000"
            underline="hover"
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            Call Airport <PhoneIcon style={{ marginLeft: "5px" }} />
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default TravelPage;
