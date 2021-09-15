import { Typography } from "@material-ui/core";
import React from "react";

const Subtitle = (props) => {
  return (
    <Typography gutterBottom variant="body1" color="textPrimary">
      {props.children}
    </Typography>
  );
};

export default Subtitle;
