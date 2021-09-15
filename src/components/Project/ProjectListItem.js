import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  Typography,
  Fade,
} from "@material-ui/core";
import React, { useState } from "react";
import ProjectListItemLanguages from "./ProjectListItemLanguages";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import { languages } from "../../data/projects";
import { useTheme } from "@material-ui/styles";

const allLanguages = languages;
const ProjectListItem = ({ project }) => {
  const theme = useTheme();

  const [buttonsVisible, setButtonsVisible] = useState(false);

  const handleOpen = (href) => {
    window.open(href, "_blank").focus();
  };

  return (
    <Grid item sm={4}>
      <Fade in={true}>
        <Card
          onMouseOver={() => {
            if (!buttonsVisible) setButtonsVisible(true);
          }}
          onMouseOut={() => {
            setButtonsVisible(false);
          }}
          variant="outlined"
          style={{ borderWidth: 0, maxWidth: "350px" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project Image"
              height="180"
              image={project.imgSrc}
              style={{ borderRadius: "8px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h6" align="left">
                {project.name}
              </Typography>
              <ProjectListItemLanguages
                languageIds={project.languages}
                allLanguages={allLanguages}
              />

              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
                align="left"
                style={{ marginTop: theme.spacing(1), fontWeight: 600 }}
              >
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Fade in={buttonsVisible}>
            <CardActions>
              <Button
                startIcon={<VisibilityRoundedIcon />}
                variant="contained"
                onClick={() => handleOpen(project.websiteHref)}
                color="primary"
              >
                Preview
              </Button>
              <Button
                startIcon={<GitHubIcon />}
                onClick={() => handleOpen(project.githubHref)}
                color="primary"
              >
                Github repo
              </Button>
            </CardActions>
          </Fade>
        </Card>
      </Fade>
    </Grid>
  );
};

export default ProjectListItem;
