import { Chip } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";

const ProjectLanguages = ({
  languages,
  selectedLanguagesId,
  setSelectedLanguagesId,
}) => {
  const theme = useTheme();

  const handleClick = (id) => {
    setSelectedLanguagesId((selectedLanguagesId) => {
      if (selectedLanguagesId.length === 0) return [id];
      else {
        if (id === 0) {
          return [0];
        } else {
          if (selectedLanguagesId.some((sid) => sid === id))
            return selectedLanguagesId.filter((sid) => sid !== id);
          else return [...selectedLanguagesId.filter((sid) => sid !== 0), id];
        }
      }
    });
  };

  return (
    <div
      style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
    >
      {languages.map((language) => (
        <Chip
          style={{ margin: theme.spacing(1) }}
          clickable
          color={
            selectedLanguagesId &&
            selectedLanguagesId.some((sid) => sid === language.id)
              ? "primary"
              : "default"
          }
          onClick={() => handleClick(language.id)}
          key={language.id}
          label={language.name}
        />
      ))}
    </div>
  );
};

export default ProjectLanguages;
