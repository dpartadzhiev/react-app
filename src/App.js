import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes.config";

const App = () => {
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            exact
            path={route.path}
            render={(props) => <route.component {...props} />}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
