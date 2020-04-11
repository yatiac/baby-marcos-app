import React from "react";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";

import endOfDay from "date-fns/endOfDay";
import startOfDay from "date-fns/startOfDay";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CountUp from "react-countup";
import DiaperChangeChip from "./DiaperChangeChip";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodayDiaperseChange = ({ date }) => {
  const classes = useStyles();

  useFirestoreConnect([
    {
      collection: "diapersChange",
      limit: 30,
      orderBy: ["date", "desc"],
      where: [
        ["date", ">=", startOfDay(date)],
        ["date", "<=", endOfDay(date)],
      ],
    },
  ]);

  const {
    diapersChangesTotal,
    pupiPampersTotal,
    pipiPampersTotal,
  } = useSelector((state) => {
    let diapersChangesTotal = 0,
      pipiPampersTotal = 0,
      pupiPampersTotal = 0;

    if (isLoaded(state.firestore.ordered.diapersChange)) {
      let response = state.firestore.ordered.diapersChange;
      if (response.length > 0) {
        diapersChangesTotal = response.length;
        pupiPampersTotal = response.filter((d) => d.pupi).length;
        pipiPampersTotal = response.filter((d) => d.pipi).length;
      }
    }
    return {
      diapersChangesTotal,
      pupiPampersTotal,
      pipiPampersTotal,
    };
  });

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Pañales
        </Typography>
        {/* <Typography className={classes.pos} component="h2">
          {format(new Date(), "PPP", { locale: es })}
        </Typography> */}
        <Typography variant="h2" color="textSecondary">
          {diapersChangesTotal ? (
            <CountUp start={0} end={diapersChangesTotal} duration={1} />
          ) : (
            "0"
          )}
        </Typography>
        <Typography colot="textSecondary">
          <DiaperChangeChip type="pipi" amount={pipiPampersTotal} />
          <DiaperChangeChip type="pupi" amount={pupiPampersTotal} />          
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodayDiaperseChange;
