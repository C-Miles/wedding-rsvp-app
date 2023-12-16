import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Alert from "@mui/lab/Alert";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LandingPageLandscape from "./images/landing_page_landscape.jpg";
import LandingPagePortrait from "./images/landing_page_portrait.jpg";

const CORRECT_PASSWORD = "twomiles";

function LandingPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [wrongPassword, setWrongPassword] = React.useState(false);

  const onSubmit = (data) => {
    const enteredPassword = data.password.toLowerCase();

    if (enteredPassword !== CORRECT_PASSWORD) {
      setWrongPassword(true);
      return;
    }

    setWrongPassword(false);
    navigate("/rsvp");
  };

  const [textStyle, setTextStyle] = useState({
    opacity: 0,
    transform: 'scale(0.6)'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextStyle({
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 1s ease, transform 1s ease'
      });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        width={isSmallScreen ? "70%" : "100%"}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          component="h1"
          gutterBottom
          align="center"
          style={{
            color: "white",
            position: "absolute",
            top: isSmallScreen ? "12%" : "3%",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            fontSize: isSmallScreen ? 26 : 45,
            width: "100%",
            ...textStyle
          }}
        >
          CHRISTOPHER & CASEY
        </Typography>
        <Typography
          variant={"subtitle1"}
          gutterBottom
          align="center"
          style={{
            color: "white",
            position: "absolute",
            top: isSmallScreen ? "17%" : "12%",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
            fontSize: isSmallScreen ? 12 : 18,
            width: "100%",
            ...textStyle
          }}
        >
          FEBRUARY 10, 2024 * COLUMBUS, OH
        </Typography>
        <img
          src={isSmallScreen ? LandingPagePortrait : LandingPageLandscape}
          alt="Portrait"
          style={{
            width: isSmallScreen ? "auto" : "100vw",
            height: isSmallScreen ? "100vh" : "auto",
            objectFit: "cover",
            objectPosition: "center",
            maxHeight: isSmallScreen && "90vh",
          }}
        />
      </Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ position: "absolute", bottom: isSmallScreen ? "20%" : "1%" }}
      >
        {wrongPassword && (
          <Alert onClose={() => setWrongPassword(false)} severity="error">
            Wrong Password!
          </Alert>
        )}

        <Box
          display="flex"
          alignItems="center"
          marginBottom={5}
          style={{ transform: isSmallScreen ? "scale(0.8)" : "scale(1)" }}
        >
          <Box marginRight={2}>
            <Input
              placeholder="  Invitation Password"
              type="password"
              {...register("password", { required: "Password is required." })}
              required
              style={{ backgroundColor: "#ece3d2", color: "black" }}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            style={{ backgroundColor: "#ece3d2", color: "black" }}
          >
            Proceed
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LandingPage;
