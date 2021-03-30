import "./App.css";
import React from "react";
import Home from "./components/Home";
import Trailer from "./components/Trailer";
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trailer/:id" component={Trailer} />
      </Switch>
    </>
  );
}

export default App;
