import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import IList from "../controls/IList";
import Section from "../controls/Section";
import Subheading from "../controls/Subheading";
import {
  features,
  issueTrackerBackEnd,
  issueTrackerDemo,
  issueTrackerFrontEnd,
} from "../data/issuetracker";

const featureList = features;

const IssueTracker = () => {
  const handleOpen = (url) => {
    window.open(url, "_blank").focus();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section heading="Issue Tracker">
      <Subheading gutterBottom>Links</Subheading>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="subtitle1"
            color="initial"
          >
            Demo:
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => handleOpen(issueTrackerDemo)}
            variant="outlined"
            color="primary"
          >
            Website
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="subtitle1"
            color="initial"
          >
            Github:
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => handleOpen(issueTrackerFrontEnd)}
            variant="outlined"
            color="primary"
          >
            Front End
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => handleOpen(issueTrackerBackEnd)}
            variant="outlined"
            color="primary"
          >
            Back End
          </Button>
        </Grid>
      </Grid>
      <Subheading>Motivation</Subheading>
      <Typography>
        I like to organize and plan my work. At the same time, I like to track
        the progress as well as the time spent doing that work. There are many
        apps that offer one or the other functionality. But there are few that
        provide both functionalities that are integrated very well.
      </Typography>
      <Subheading>Features</Subheading>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <IList items={featureList} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default IssueTracker;
