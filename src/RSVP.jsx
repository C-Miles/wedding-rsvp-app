import React from "react";
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
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const guest = {
      firstName: data.firstName,
      lastName: data.lastName,
      dinnerChoice: data.dinnerChoice,
      songRecommendation: data.songRecommendation,
      // Add a timestamp, RSVP date or any other info if you like
      rsvpDate: new Date().toISOString(),
    };

    console.log(guest);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        RSVP
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="First Name"
          {...register("firstName", { required: "First Name is required" })}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          label="Last Name"
          {...register("lastName", { required: "Last Name is required" })}
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl variant="outlined" margin="normal" fullWidth>
          <InputLabel>Dinner Choice</InputLabel>
          <Select
            label="Dinner Choice"
            {...register("dinnerChoice", {
              required: "Dinner choice is required",
            })}
          >
            <MenuItem value="chicken">Chicken</MenuItem>
            <MenuItem value="beef">Beef</MenuItem>
          </Select>
        </FormControl>

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
  );
}

export default RSVP;
