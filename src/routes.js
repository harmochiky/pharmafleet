import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DepPage from "./pages/DepPage";
import Panel from "./pages/Panel";
import BuyerApply from "./pages/BuyerApply";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/s/:dep" component={DepPage} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/apply" component={BuyerApply} />
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
