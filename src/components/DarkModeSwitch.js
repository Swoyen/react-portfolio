import {
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [checked, setChecked] = useState(false);
  //const isDarkMode = darkMode.state.darkMode;
  useEffect(() => {
    setChecked(darkMode);
  }, [darkMode]);

  const handleChange = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            value={checked}
            onChange={() => handleChange()}
            name="darkToggle"
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label={
          <Typography variant="subtitle2" style={{ fontWeight: 600 }}>
            Dark Mode
          </Typography>
        }
      />
    </FormGroup>
  );
};
