import React, { useState } from "react";

import { useForm } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

function RSVP() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const [numOfGuests, setNumOfGuests] = useState(1);

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
  };

  return (
    <div style={{ width: "90%" }}>
      <Typography variant="h4" gutterBottom>
        RSVP
      </Typography>
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
                <Select
                  label={`Dinner Choice for Guest ${index + 1}`}
                  {...register(`guest${index + 1}DinnerChoice`, {
                    required: `Dinner choice for Guest ${
                      index + 1
                    } is required`,
                  })}
                >
                  <MenuItem value="chicken">Chicken</MenuItem>
                  <MenuItem value="beef">Beef</MenuItem>
                </Select>
              </FormControl>
            </div>
          ))}

          <TextField
            label="Song Recommendation"
            {...register("songRecommendation")}
            variant="outlined"
            margin="normal"
            fullWidth
          />

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
    </div>
  );
}

export default RSVP;
