import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  Typography,
  Chip,
  Fade,
} from "@material-ui/core";
import React, { useState } from "react";
import ProjectListItemLanguages from "./ProjectListItemLanguages";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
const languages = [
  { id: 0, name: "React" },
  { id: 1, name: ".NET Core" },
  { id: 2, name: "Full-stack" },
  { id: 3, name: "JavaScript" },
];

const ProjectListItem = () => {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  return (
    <Grid item sm={4}>
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
            image="/placeholder.jpg"
            style={{ borderRadius: "8px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6" align="left">
              Lizard
            </Typography>
            <ProjectListItemLanguages languages={languages} />

            <Typography
              variant="subtitle2"
              color="textSecondary"
              component="p"
              align="left"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <Fade in={buttonsVisible}>
          <CardActions>
            <Button
              startIcon={<VisibilityRoundedIcon />}
              variant="contained"
              color="primary"
            >
              Preview
            </Button>
            <Button startIcon={<GitHubIcon />} color="primary">
              Github repo
            </Button>
          </CardActions>
        </Fade>
      </Card>
    </Grid>
  );
};

export default ProjectListItem;
