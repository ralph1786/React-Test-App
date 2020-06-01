import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Link to="/one">One</Link>
      <Link to="/two">Two</Link>
      <Switch>
        <Route path="/one" render={() => <PageOne />} />
        <Route path="/two" render={() => <PageTwo />} />
      </Switch>
    </div>
  );
}

export default App;
