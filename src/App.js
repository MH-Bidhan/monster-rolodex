import React from "react";
import { Route, Switch } from "react-router";
import MonsterDetail from "./pages/monster-details/monster-details.component";
import MonsterRolodex from "./pages/monster-rolodex/monster-rolodex.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MonsterRolodex} />
        <Route exact path="/monster/:id" component={MonsterDetail} />
      </Switch>
    </div>
  );
}

export default App;
