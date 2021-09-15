import { Typography } from "@material-ui/core";
import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <Typography color="error" variant="subtitle2">
      {message}
    </Typography>
  );
};

export default ErrorMessage;
