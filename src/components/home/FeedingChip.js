import React from "react";

import bottle from "../../images/bottle.png";
import breast from "../../images/breast.png";

import Chip from "@material-ui/core/Chip";

const FeedingChip = ({ type, amount }) => {
  let icon;
  let label;
  const timeConvert = (n) => {
    let num = n;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    let hourLabel = rhours + ' hora';
    let minuteLabel = rminutes + ' minuto';
    if (rhours > 1) {
        hourLabel += 's y ';      
    } else if (rhours === 0) {
        hourLabel = '';
    } else {
        hourLabel += ' y ';
    }

    if (rminutes > 1) {
        minuteLabel += 's'
    } else if (rhours === 0) {
        minuteLabel = '';
    }

    return hourLabel + minuteLabel;
  };

  switch (type) {
    case "breast":
      icon = breast;
      label = timeConvert(amount);
      break;
    case "bottle":
      icon = bottle;
      label = amount + " onza(s)";
      break;
    default:
      break;
  }
  return <Chip avatar={<img src={icon} alt="" width="20px" />} label={label} />;
};

export default FeedingChip;
