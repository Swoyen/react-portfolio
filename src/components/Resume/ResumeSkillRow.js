import { Typography, makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  skill: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },

    margin: theme.spacing(1),
  },
}));

const ResumeSkillRow = ({ skills }) => {
  const theme = useTheme();
  const classes = useStyles();
  return skills.map((skill, index) => {
    return (
      <Typography
        key={index}
        className={classes.skill}
        variant="subtitle2"
        align="center"
      >
        {skill}
      </Typography>
    );
  });
};

export default ResumeSkillRow;
