import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../sections/Section";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section heading="Contact">
      <Typography gutterBottom color="textSecondary" variant="body2">
        Please contact me if you have any opportunities or suggestions for the
        site. <br />I will reply as soon as possible
      </Typography>
      <ContactForm />
    </Section>
  );
};

export default Contact;
