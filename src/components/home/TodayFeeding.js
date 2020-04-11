import React from "react";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import endOfDay from "date-fns/endOfDay";
import startOfDay from "date-fns/startOfDay";

import CountUp from "react-countup";
import FeedingChip from "./FeedingChip";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    display: "flex",
  },
});

const TodayFeeding = ({ date }) => {
  const classes = useStyles();

  useFirestoreConnect([
    {
      collection: "feedings",
      limit: 30,
      orderBy: ["date", "desc"],
      where: [
        ["date", ">=", startOfDay(date)],
        ["date", "<=", endOfDay(date)],
      ],
    },
  ]);

  const amountReducer = (type, array) => {
    return array
      .filter((d) => d.type === type)
      .map((d) => Number(d.amount))
      .reduce((t, n) => t + n,0);
  };

  const { feedingsTotal, totalOunces, totalMinutes } = useSelector((state) => {
    let feedingsTotal = 0,
      totalOunces = 0,
      totalMinutes = 0;

    if (isLoaded(state.firestore.ordered.feedings)) {
      let response = state.firestore.ordered.feedings;
      if (response.length > 0) {
        feedingsTotal = response.length;
        totalOunces = amountReducer("bottle", response);
        totalMinutes = amountReducer("breast", response);
      }
    }
    return {
      feedingsTotal,
      totalOunces,
      totalMinutes,
    };
  });

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Ha comido {}
        </Typography>
        <Typography variant="h2" color="textSecondary">
          {feedingsTotal ? (
            <CountUp start={0} end={feedingsTotal} duration={1} />
          ) : (
            "0"
          )}{" "}
          veces
        </Typography>
        <Typography colot="textSecondary" className={classes.chip}>
          <FeedingChip type="breast" amount={totalMinutes} />
          <FeedingChip type="bottle" amount={totalOunces} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodayFeeding;
