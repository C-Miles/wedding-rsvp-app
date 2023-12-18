import React, { useEffect, useState } from "react";
import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./index.js";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import RSVPLandscape from "./images/rsvp_landscape.jpg";
import RSVPPortrait from "./images/rsvp_portrait.jpg";

function RSVP() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    control,
    formState: { isValid },
    handleSubmit,
    register,
  } = useForm({
    mode: "onChange",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [numOfGuests, setNumOfGuests] = useState(1);

  useEffect(() => {
    const submitted = localStorage.getItem("rsvpSubmitted");
    if (submitted === "true") {
      setIsSubmitted(true);
    }
  }, []);

  const onSubmit = (data) => {
    const guests = [];

    for (let i = 0; i < numOfGuests; i++) {
      const guest = {
        firstName: data[`guest${i + 1}FirstName`],
        lastName: data[`guest${i + 1}LastName`],
        dinnerChoice: data[`guest${i + 1}DinnerChoice`],
        dietaryRestriction: data[`guest${i + 1}DietaryRestrictions`],
        songRecommendation: data[`guest${i + 1}SongRecommendation`],
      };
      guests.push(guest);
    }

    const payload = {
      rsvpDate: new Date().toISOString(),
      guests,
    };

    addGuestsToFirestore(payload);
  };

  const addGuestsToFirestore = async (payload) => {
    console.log(payload);
    try {
      const guestCollection = collection(db, "guests");
      const batch = writeBatch(db);

      payload.guests.forEach((guest) => {
        const newGuestRef = doc(guestCollection);
        batch.set(newGuestRef, {
          ...guest,
          rsvpDate: payload.rsvpDate,
        });
      });

      await batch.commit();
      console.log("All guests added successfully");

      localStorage.setItem("rsvpSubmitted", "true");
      setIsSubmitted(true);

      window.scrollTo(0, 0);
    } catch (e) {
      console.error("Error adding guests: ", e);
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: '80px'
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!isSubmitted && (
          <>
            <Typography
              align="center"
              component="h1"
              gutterBottom
              style={{ marginTop: "3%" }}
              variant={isSmallScreen ? "h4" : "h3"}
            >
              RSVP
            </Typography>
            <Divider
              style={{
                backgroundColor: "#2d2d2d",
                marginBottom: "25px",
                width: "80%",
              }}
            />
          </>
        )}
        {isSubmitted ? (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Typography
              align="center"
              component="h1"
              gutterBottom
              style={{ marginTop: "3%" }}
              variant={isSmallScreen ? "h4" : "h3"}
            >
              Thank you for your RSVP!
            </Typography>

            <Divider
              style={{
                backgroundColor: "#2d2d2d",
                marginBottom: "25px",
                width: "80%",
              }}
            />

            <img
              alt="Venue"
              src={isSmallScreen ? RSVPPortrait : RSVPLandscape}
              style={{
                alignSelf: "center",
                boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
                height: isSmallScreen ? "100vh" : "auto",
                objectFit: "cover",
                objectPosition: "center",
                width: isSmallScreen ? "100vw" : "800px",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              overflowY: "auto",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ width: isSmallScreen ? "85%" : "800px", alignSelf: "center" }}
            >
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <InputLabel>Number of Guests</InputLabel>
                <Select
                  value={numOfGuests}
                  onChange={(e) => setNumOfGuests(e.target.value)}
                  label="Number of Guests"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {Array.from({ length: numOfGuests }).map((_, index) => (
                <div key={index}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  >
                    Guest {index + 1}
                  </Typography>

                  <TextField
                    label={`Guest ${index + 1} First Name`}
                    {...register(`guest${index + 1}FirstName`, {
                      required: `First Name for Guest ${index + 1} is required`,
                    })}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  />

                  <TextField
                    label={`Guest ${index + 1} Last Name`}
                    {...register(`guest${index + 1}LastName`, {
                      required: `Last Name for Guest ${index + 1} is required`,
                    })}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  />

                  <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  >
                    <InputLabel>Dinner Choice for Guest {index + 1}</InputLabel>
                    <Controller
                      name={`guest${index + 1}DinnerChoice`}
                      control={control}
                      defaultValue="chicken"
                      render={({ field }) => (
                        <Select
                          label={`Dinner Choice for Guest ${index + 1}`}
                          {...field}
                        >
                          <MenuItem value="chicken">Chicken</MenuItem>
                          <MenuItem value="beef">Beef</MenuItem>
                          <MenuItem value="vegetarian">Vegetarian</MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl>

                  <TextField
                    label={`Dietary Restrictions for Guest ${index + 1}`}
                    {...register(`guest${index + 1}DietaryRestrictions`)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  />

                  <TextField
                    label={`Song Recommendation for Guest ${index + 1}`}
                    {...register(`guest${index + 1}SongRecommendation`)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  />
                </div>
              ))}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "15px" }}
                disabled={!isValid}
              >
                Submit
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default RSVP;
