import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";

const Subheading = (props) => {
  let { children, ...rest } = props;
  const theme = useTheme();
  return (
    <Typography
      style={{ marginTop: theme.spacing(8), textTransform: "uppercase" }}
      variant="h5"
      color="textPrimary"
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Subheading;
