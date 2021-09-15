import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";

const ResumeItem = ({ heading, subheading, date }) => {
  const theme = useTheme();
  return (
    <div style={{ margin: theme.spacing(4) }}>
      <Typography
        style={{ fontWeight: "600" }}
        variant="body1"
        color="initial"
        gutterBottom
      >
        {heading}
      </Typography>
      <Typography variant="body2" color="initial">
        {subheading}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {date}
      </Typography>
    </div>
  );
};

export default ResumeItem;
