import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Alert from "@mui/lab/Alert";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Alaska from "./images/alaska.jpg";
import Kyoto from "./images/kyoto.jpg";

const CORRECT_PASSWORD = "3M3r4ld5##";

function LandingPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const [wrongPassword, setWrongPassword] = React.useState(false);

  const onSubmit = (data) => {
    if (data.password !== CORRECT_PASSWORD) {
      setWrongPassword(true);
      return;
    }

    setWrongPassword(false);
    navigate("/rsvp");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box width={isSmallScreen ? "70%" : "60%"} marginBottom={3}>
        <Typography
          variant={isSmallScreen ? "h4" : "h2"}
          component="h1"
          gutterBottom
          align="center"
          // fontWeight="bold"
        >
          Christopher & Casey
        </Typography>
        <img
          src={isSmallScreen ? Kyoto : Alaska}
          alt="Portrait"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {wrongPassword && (
          <Alert onClose={() => setWrongPassword(false)} severity="error">
            Wrong Password!
          </Alert>
        )}

        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          alignItems="center"
          marginBottom={5}
        >
          <Box
            marginRight={isSmallScreen ? 0 : 2}
            marginBottom={isSmallScreen ? 2 : 0}
          >
            <Input
              placeholder="Invitation Password"
              type="password"
              {...register("password", { required: "Password is required." })}
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Proceed
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default LandingPage;
