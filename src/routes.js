import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { history } from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import Main from "./modules/mainComponent";
import AddInfo from "./modules/add-info/index";
import "firebase/messaging";
import "firebase/messaging";
import firebase from "firebase";
import { firebaseConfig } from "./constants";
import LeadDetails from "./modules/leadDetails";

class Routes extends BaseComponent {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route exact path={"/:state"} component={Main} />
            <Route exact path={"/:state/:district"} component={Main} />
            <Route exact path={"/:state/:category"} component={Main} />
            <Route
              exact
              path={"/:state/:district/:category"}
              component={Main}
            />
            <Route exact path="/details/:id" component={Main} />
            <Route exact path="/volunteer" component={Main} />
            <Route exact path="/volunteers" component={Main} />
            <Route exact path="/about" component={AddInfo} />
            <Redirect exact from="*" to="/" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Routes;
