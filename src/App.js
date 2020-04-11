import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import DiaperChangesList from "./components/diaper_changes/DiaperChangesList";
import FeedingList from "./components/feeding/FeedingList";
import Home from "./components/home/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import CreateDiaperChange from "./components/diaper_changes/CreateDiaperChange";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#283593",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/diapers" component={DiaperChangesList} />
          <Route path="/feeding" component={FeedingList} />
          <Route path="/createDiaperChange" component={CreateDiaperChange} />
        </Switch>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
