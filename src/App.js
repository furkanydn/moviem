import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import route from "./pages/route";

function App() {
  return (
    <Router>
      <Switch>
        {
          route.map((route,idN) =>(
              <Route exact path={route.path} component={route.component} key={idN}/>
          ))
        }
      </Switch>
    </Router>
  );
}

export default App;
