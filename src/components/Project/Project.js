import { Chip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { languages } from "../../data/projects";
import Section from "../../controls/Section";
import ProjectLanguages from "./ProjectLanguages";
import ProjectList from "./ProjectList";
import Subtitle from "../../controls/Subtitle";

const Projects = () => {
  const [languageList, setLanguageList] = useState(languages);
  const [selectedLanguagesIdList, setSelectedLanguagesIdList] = useState([]);
  return (
    <Section heading="Projects">
      <Subtitle>Check out my work</Subtitle>
      <Typography gutterBottom color="textSecondary" variant="body2">
        If you have any questions, feel free to ask for more info
      </Typography>
      <ProjectLanguages
        languages={languageList}
        selectedLanguagesId={selectedLanguagesIdList}
        setSelectedLanguagesId={setSelectedLanguagesIdList}
      />
      <ProjectList selectedLanguagesId={selectedLanguagesIdList} />
    </Section>
  );
};

export default Projects;
