import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//pages
import Panel from "./pages/Panel";

export default function auto_routes() {
  return (
    <Switch>
      <Route exact path="/" component={Panel} />
      <Route
        render={() => {
          return <Redirect to="/" />;
        }}
      />
    </Switch>
  );
}
