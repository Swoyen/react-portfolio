import { Chip, Grid, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {},

  chipLabel: {
    fontWeight: theme.typography.fontWeightLight,
    letterSpacing: theme.typography.subtitle2.letterSpacing,
  },
}));

const ProjectListItemLanguages = ({ languageIds, allLanguages }) => {
  const classes = useStyles();
  const totalLanguages = languageIds.length;
  // eslint-disable-next-line
  const [threeLanguages, setThreeLanguages] = useState(() => {
    if (languageIds.length > 0) {
      var languages = [];
      for (
        let i = 0;
        i < (languageIds.length >= 3 ? 3 : languageIds.length);
        i++
      ) {
        let languageId = languageIds[i];
        languages.push(
          allLanguages.find((language) => language.id === languageId)
        );
      }
      return languages;
    }
  });

  const theme = useTheme();
  return (
    <Grid container justifyContent="flex-start">
      {threeLanguages &&
        threeLanguages.map((language, i) => (
          <Grid item key={language.id}>
            <Chip
              classes={{ label: classes.chipLabel }}
              color="primary"
              size="small"
              // variant="p"
              style={{
                marginLeft: i === 0 ? theme.spacing(0) : theme.spacing(0.2),
                marginRight: theme.spacing(0.2),
                marginBottom: theme.spacing(0.5),
              }}
              component={"span"}
              label={language.name}
            />
          </Grid>
        ))}
      {totalLanguages > 3 ? (
        <Grid item>
          <Chip
            size="small"
            color="primary"
            //style={{ position: "absolute", right: "10px" }}
            label={`+${totalLanguages - 3}`}
          />
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default ProjectListItemLanguages;
