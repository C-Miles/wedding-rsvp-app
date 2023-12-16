import React, { useEffect, useState } from "react";
import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./index.js";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Controller, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import KissKiss from "./images/kiss_kiss.jpg";

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
    } catch (e) {
      console.error("Error adding guests: ", e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          marginTop: "3%",
          marginBottom: "30%",
        }}
      >
        {!isSubmitted && (
          <Typography variant="h4" gutterBottom>
            RSVP
          </Typography>
        )}
        {isSubmitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              marginBottom: "5%",
            }}
          >
            <Typography
              variant={isSmallScreen ? "h6" : "h4"}
              style={{ alignSelf: "center", marginBottom: "15px" }}
            >
              Thank you for your RSVP!
            </Typography>

            <img
              alt="Venue"
              src={KissKiss}
              style={{
                width: isSmallScreen ? "85%" : "40%",
                height: "auto",
                alignSelf: "center",
              }}
            />
          </div>
        ) : (
          <div
            style={{
              maxHeight: "80vh",
              overflowY: "auto",
              boxSizing: "border-box",
              paddingRight: "20px",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl variant="outlined" margin="normal" fullWidth>
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
                  <Typography variant="h6" gutterBottom>
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
                  />

                  <TextField
                    label={`Guest ${index + 1} Last Name`}
                    {...register(`guest${index + 1}LastName`, {
                      required: `Last Name for Guest ${index + 1} is required`,
                    })}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />

                  <FormControl variant="outlined" margin="normal" fullWidth>
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
                    label={`Song Recommendation for Guest ${index + 1}`}
                    {...register(`guest${index + 1}SongRecommendation`)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </div>
              ))}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "16px" }}
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
