import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import ProjectListItem from "./ProjectListItem";

const projectList = projects;
const ProjectList = ({ selectedLanguagesId }) => {
  const [selectedProjectList, setSelectedProjectList] = useState([]);
  useEffect(() => {
    if (selectedLanguagesId.length === 0) {
      setSelectedProjectList(projectList);
    } else {
      if (selectedLanguagesId.some((sl) => sl === 0)) {
        setSelectedProjectList(projectList);
      } else {
        var filterProjectList = projectList.filter((project) =>
          selectedLanguagesId.every((slid) =>
            project.languages.some((languageId) => slid === languageId)
          )
        );
        setSelectedProjectList(filterProjectList);
      }
    }
  }, [selectedLanguagesId, selectedLanguagesId.length]);

  return (
    <Grid container spacing={4} justifyContent="center">
      {selectedProjectList.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectList;
