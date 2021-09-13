import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Section from "../../sections/Section";

const Brand = () => {
  return (
    <Section>
      <Grid
        container
        style={{ maxWidth: "1200px" }}
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Avatar variant="rounded" style={{ width: 250, height: 400 }} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" align="left" gutterBottom>
            Hi, My name is Swoyen and I am a junior webdeveloper
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            align="left"
            component="p"
            color="textSecondary"
          >
            I am a junior web developer based in Adelaide. I have less than a
            year of developing applications and I am very interested in creating
            weg apps. I am open for new opportunities and interesting projects.
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant="contained">Contact me</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Check my work</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Brand;
