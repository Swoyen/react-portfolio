import { Avatar, Button, Grid, Typography, useTheme } from "@material-ui/core";
import React from "react";
import Section from "../../controls/Section";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
const Brand = () => {
  const theme = useTheme();
  return (
    <Section id="Brand">
      <Grid
        container
        style={{ maxWidth: "1200px" }}
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Avatar
            src="/image/profilePic.jpg"
            variant="rounded"
            style={{ width: 250, height: 400, filter: "grayscale(50%)" }}
          />
        </Grid>
        <Grid
          item
          xs={11}
          sm={6}
          container
          direction="column"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h4" align="left" gutterBottom>
              Hi! My name is Swoyen. <br /> I'm a Software Developer
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant="body2"
              align="left"
              component="p"
              color="textSecondary"
              style={{ marginBottom: theme.spacing(2), fontWeight: 600 }}
            >
              I am a junior web developer based in Adelaide. I have less than a
              year of developing applications and I am very interested in
              creating weg apps. I am open for new opportunities and interesting
              projects.
            </Typography>
          </Grid>

          <Grid container item spacing={1}>
            <Grid item>
              <Button
                startIcon={<MailOutlineRoundedIcon />}
                href="#Contact"
                color="primary"
                variant="contained"
              >
                Contact me
              </Button>
            </Grid>
            <Grid item>
              <Button href="#Projects" variant="text" color="primary">
                Check my work
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Brand;
