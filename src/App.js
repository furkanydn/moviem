import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";

import './App.css';
import route from "./pages/route";

function App() {
  return (
    <Router>
      <Switch>
        {
          route.map((route, idNumbre) =>(
              <Route exact path={route.path} component={route.component} key={idNumbre}/>
          ))
        }
        {/*Buraya-404-sayfası-geliyor-normalde:)*/}
      </Switch>
    </Router>
  );
}

export default App;
