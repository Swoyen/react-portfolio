import { Typography, useTheme } from "@material-ui/core";
import React from "react";

const Section = (props) => {
  const theme = useTheme();
  return (
    <div
      style={{ paddingTop: theme.spacing(7), paddingBottom: theme.spacing(7) }}
    >
      <Typography variant="h4" gutterBottom>
        {props.heading}
      </Typography>
      {props.children}
    </div>
  );
};

export default Section;
