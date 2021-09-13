import { Chip, Grid, useTheme } from "@material-ui/core";

import React, { useState } from "react";

const ProjectListItemLanguages = ({ languages }) => {
  const [totalLanguages, setTotalLanguages] = useState(languages.length);
  const [threeLanguages, setThreeLanguages] = useState(
    languages.length > 3 ? languages.slice(0, 3) : languages
  );
  const theme = useTheme();
  return (
    <Grid container>
      {threeLanguages.map((language) => (
        <Chip
          size="small"
          key={language.id}
          style={{
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),
          }}
          label={language.name}
        />
      ))}
      {totalLanguages > 3 ? (
        <Chip
          size="small"
          style={{ position: "absolute", right: "10px" }}
          label={`+${totalLanguages - 3}`}
        />
      ) : (
        ""
      )}
    </Grid>
  );
};

export default ProjectListItemLanguages;
