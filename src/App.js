import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/user/login";
import Welcome from "./pages/Welcome.jsx";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Welcome}></Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
