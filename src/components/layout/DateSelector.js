import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import add from "date-fns/add";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    "& > *": {
      "pointer-events": "none",
    },
  },
}));

export default function DateSelector({ handleDateChange }) {
  const classes = useStyles();
  const [state, setState] = useState({
    today: { variant: "contained", disableElevation: true },
    sevenDays: {},
    thirtyDays: {},
  });

  const handleClick = (e) => {    
    setState({
      today: {},
      sevenDays: {},
      thirtyDays: {},
      [e.target.id]: {
        variant: "contained",
        disableElevation: true,
      },
    });
    switch (e.target.id) {
      case "today":
        handleDateChange(new Date());
        break;
      case "sevenDays":
        handleDateChange(add(new Date(), { days: -7 }));
        break;
      case "thirtyDays":
        handleDateChange(add(new Date(), { days: -30 }));
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined secondary button group">
        <Button
          id="today"
          {...state.today}
          onClick={handleClick}
          className={classes.button}
        >
          Hoy
        </Button>
        <Button
          id="sevenDays"
          {...state.sevenDays}
          onClick={handleClick}
          className={classes.button}
        >
          Últimos 7 Días
        </Button>
        <Button
          id="thirtyDays"
          {...state.thirtyDays}
          onClick={handleClick}
          className={classes.button}
        >
          Últimos 30 Días
        </Button>
      </ButtonGroup>
    </div>
  );
}
