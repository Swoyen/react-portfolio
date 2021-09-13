import React from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container direction="rows" spacing={1} justifyContent="center">
        <Grid item sm={8} xs={12}>
          <TextField
            label="Email"
            placeholder="Enter your email address here"
            id="email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item sm={8} xs={12}>
          <TextField
            label="Name"
            placeholder="Enter your full name here"
            id="name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item sm={8} xs={12}>
          <TextField
            label="Comments"
            placeholder="Type here"
            id="name"
            variant="outlined"
            fullWidth
            multiline
            minRows={7}
            maxRows={10}
          />
        </Grid>
      </Grid>
      <Button variant="contained">Send</Button>
    </form>
  );
};

export default ContactForm;
