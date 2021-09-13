import { Chip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Section from "../../sections/Section";
import ProjectLanguages from "./ProjectLanguages";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [languages, setLanguages] = useState([
    { id: 0, name: "React", selected: false },
    { id: 1, name: ".NET Core", selected: false },
    { id: 2, name: "Full-stack", selected: false },
    { id: 3, name: "JavaScript", selected: false },
  ]);
  return (
    <Section heading="Projects">
      <Typography color="textSecondary" variant="body2">
        Check out my work
      </Typography>
      <Typography gutterBottom color="textSecondary" variant="body2">
        If you have any questions, feel free to ask for more info
      </Typography>
      <ProjectLanguages languages={languages} setLanguages={setLanguages} />
      <ProjectList />
    </Section>
  );
};

export default Projects;
