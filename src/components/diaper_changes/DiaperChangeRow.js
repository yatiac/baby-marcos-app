import React, { useState } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import DeleteDiaperChange from "./DeleteDiaperChange";
import { ListItemAvatar } from "@material-ui/core";

const DiaperChangeRow = ({ diaperChange }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }

  const pipi = diaperChange.pipi ? "💛" : "";
  const pupi = diaperChange.pupi ? "💩" : "";
  const comment = !diaperChange.comment ? "" : diaperChange.comment;

  return (
    <React.Fragment>
      <ListItem button>
        <ListItemAvatar>
          {pipi + pupi}
        </ListItemAvatar>
        <ListItemText
          primary={diaperChange.date}
          secondary={
            <React.Fragment>
              {comment}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={handleOpen}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <DeleteDiaperChange open={open} id={diaperChange.id} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default DiaperChangeRow;
