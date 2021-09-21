import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const IList = ({ items }) => {
  return (
    <List>
      {items.map((text, index) => (
        <ListItem alignItems="center" key={index}>
          <ListItemText
            primary={text}
            primaryTypographyProps={{ align: "center" }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default IList;
