import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HomeIcon from '@material-ui/icons/Home';

import "./Navbar.css";

const useStyles = makeStyles({
  root: {
    //width: 500,
    width: "100%",
    position: "fixed",
    bottom: 0,
    background: "#e2e2e2",
    paddingBottom: "1rem"
  },
  stickToBottom: {},
});

const Navbar = () => {
  let location = useLocation();
  const classes = useStyles();
  const path = location.pathname.replace('/', '');  
  const [value, setValue] = React.useState(path);
  let history = useHistory();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
      elevation={1}
    >
      <BottomNavigationAction
        label="Inicio"
        icon={<HomeIcon />}
        value=""
      />
      <BottomNavigationAction
        label="Pañales"
        icon={<ChildFriendlyIcon />}
        value="diapers"
      />
      <BottomNavigationAction
        label="Comida"
        icon={<RestaurantIcon />}
        value="feeding"
      />
      {/* <BottomNavigationAction label="Nearby" icon={<RestaurantIcon />} value="diapers" /> */}
    </BottomNavigation>
  );
};
export default Navbar;
