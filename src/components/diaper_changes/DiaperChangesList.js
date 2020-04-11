import React, { useState } from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import endOfDay from "date-fns/endOfDay";
import startOfDay from "date-fns/startOfDay";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import DiaperChangeRow from "./DiaperChangeRow";
import CreateDiaperChange from "./CreateDiaperChange";
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

const DiaperChangesList = () => {
  const [date, setDate] = useState(new Date());
  useFirestoreConnect([
    {
      collection: "diapersChange",
      limit: 30,
      orderBy: ["date", "desc"],
      where: [
        ["date", ">=", startOfDay(date)],
        ["date", "<=", endOfDay(new Date())],
      ],
    },
  ]);

  const diapersChanges = useSelector((state) => {
    let response = state.firestore.ordered.diapersChange;
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

  const classes = useStyles();

  const [open, setOpen] = useState(false);

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
    <React.Fragment>
      <div>
        <h1>Cambios de Pañal</h1>
        <DateSelector handleDateChange={handleDateChange} />
      </div>
      <div>
        <List component="nav" aria-label="contacts">
          {diapersChanges &&
            diapersChanges.map((d, index) => (
              <React.Fragment key={index}>
                <DiaperChangeRow diaperChange={d} />
                <Divider />
              </React.Fragment>
            ))}
        </List>
      </div>
      <div>
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <CreateDiaperChange open={open} handleClose={handleClose} />
      </div>
    </React.Fragment>
  );
};

export default DiaperChangesList;
