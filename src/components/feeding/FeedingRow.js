import React, { useState } from "react";
import bottle from "../../images/bottle.png";
import breast from "../../images/breast.png";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteFeeding from "./DeleteFeeding";
import { ListItemAvatar, Avatar } from "@material-ui/core";

const FeedingRow = ({ record }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <React.Fragment>
      <ListItem button>
        <ListItemAvatar>
          
            {record.type === "breast" ? (
              <img src={breast} alt="" width="30px" />
            ) : (
              <img src={bottle} alt="" width="30px" />
            )}
          
        </ListItemAvatar>
        <ListItemText
          secondary={<React.Fragment>{record.date}</React.Fragment>}
          primary={
            <React.Fragment>
              {record.amount} {record.type === "breast" ? "minutos" : "onza(s)"}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleOpen}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <DeleteFeeding handleClose={handleClose} open={open} id={record.id} />
    </React.Fragment>
  );
};

export default FeedingRow;
