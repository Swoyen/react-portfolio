import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import React from "react";
import ProjectListItem from "./ProjectListItem";

const projects = ["a", "b", "c", "D", "E"];

const ProjectList = () => {
  return (
    <Grid container spacing={5} justifyContent="center">
      {projects.map((project) => (
        <ProjectListItem key={project} />
      ))}
    </Grid>
  );
};

export default ProjectList;
