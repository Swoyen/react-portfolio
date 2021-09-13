import { Chip } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";

const ProjectLanguages = ({ languages, setLanguages }) => {
  const theme = useTheme();

  const handleClick = (id) => {
    setLanguages((languages) =>
      languages.map((l) => (l.id !== id ? l : { ...l, selected: !l.selected }))
    );
  };

  return languages.map((language) => (
    <Chip
      style={{ margin: theme.spacing(1) }}
      clickable
      color={language.selected ? "primary" : "secondary"}
      onClick={() => handleClick(language.id)}
      key={language.id}
      label={language.name}
    ></Chip>
  ));
};

export default ProjectLanguages;
