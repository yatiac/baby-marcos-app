import React, { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import endOfDay from "date-fns/endOfDay";
import startOfDay from "date-fns/startOfDay";

import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import CreateFeeding from "./CreateFeeding";
import FeedingRow from "./FeedingRow";

import DateSelector from "../layout/DateSelector";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: "4rem",
  },
  inline: {
    display: "inline",
  },
}));

const FeedingList = () => {
  const [date, setDate] = useState(new Date());
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useFirestoreConnect([
    {
      collection: "feedings",
      limit: 30,
      orderBy: ["date", "desc"],
      where: [
        ["date", ">=", startOfDay(date)],
        ["date", "<=", endOfDay(new Date())],
      ],
    },
  ]);

  const feedings = useSelector((state) => {
    let response = state.firestore.ordered.feedings;
    response =
      response &&
      response.map((d) => {
        return {
          ...d,
          date: format(d.date.toDate(), "PPP',' hh:mm a", { locale: es }),
        };
      });    
    return response && response;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {    
    setDate(date);
  };


  return (
    <div>
      <h1>Lista de Alimentación</h1>
      <DateSelector handleDateChange={handleDateChange} />
      <List>
        {feedings &&
          feedings.map((record, index) => (
            <React.Fragment key={index}>
              <FeedingRow record={record} />
              <Divider></Divider>
            </React.Fragment>
          ))}
      </List>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <CreateFeeding handleClose={handleClose} open={open} />
    </div>
  );
};

export default FeedingList;
