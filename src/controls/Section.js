import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
    position: "relative",
  },

  headingText: {
    textAlign: "center",
    "&::before": {
      // content: '""',
      // position: "absolute",
      // width: "100%",
      // height: "1px",
      // top: theme.spacing(14),
      // right: "0%",
      // borderRadius: "10px",
      // borderBottom: `3px solid ${}`,
    },
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   width: "100%",
    //   height: "1px",
    //   top: theme.spacing(6),
    //   right: "0%",
    //   borderRadius: "5px",
    //   borderBottom: "3px solid black",
    // },
  },
}));

const Section = (props) => {
  const classes = useStyles();
  return (
    <section id={props.heading} className={classes.section}>
      {props.heading ? (
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          align="center"
          color="textPrimary"
          className={classes.headingText}
        >
          {props.heading}
        </Typography>
      ) : (
        ""
      )}
      {props.children}
    </section>
  );
};

export default Section;
