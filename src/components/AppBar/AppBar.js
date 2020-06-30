import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Landing from "../Landing/index";
import NotFoundPage from "../NotFoundPage/index";

function AppBar() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/abc" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppBar;
