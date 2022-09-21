import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Panel from "./pages/Panel";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/panel" component={Panel} />
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
