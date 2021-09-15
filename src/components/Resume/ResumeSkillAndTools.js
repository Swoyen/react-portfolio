import { Grid, useTheme } from "@material-ui/core";
import { SlowMotionVideo } from "@material-ui/icons";
import React from "react";
import Subheading from "../../controls/Subheading";
import Subtitle from "../../controls/Subtitle";
import { skillsRow1, skillsRow2, skillsRow3 } from "../../data/resume";
import ResumeSkillRow from "./ResumeSkillRow";

const skills1 = skillsRow1;
const skills2 = skillsRow2;
const skills3 = skillsRow3;
const ResumeSkillAndTools = () => {
  const theme = useTheme();
  return (
    <div style={{ marginBottom: theme.spacing(4) }}>
      <Subheading>Skills and Tools</Subheading>
      <Grid
        style={{ marginTop: theme.spacing(2) }}
        container
        spacing={2}
        justifyContent="center"
      >
        <Grid item xs={8} sm={3}>
          <ResumeSkillRow skills={skills1} />
        </Grid>
        <Grid item xs={8} sm={3}>
          <ResumeSkillRow skills={skills2} />
        </Grid>
        <Grid item xs={8} sm={3}>
          <ResumeSkillRow skills={skills3} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeSkillAndTools;
