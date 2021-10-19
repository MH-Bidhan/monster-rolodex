import React from "react";
import { Route, Switch } from "react-router";
import MonsterRolodex from "./pages/monster-rolodex.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MonsterRolodex} />
      </Switch>
    </div>
  );
}

export default App;
