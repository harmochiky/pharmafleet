import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//pages
import Home from "./pages/Home";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    );
  }
}

export default Router;
