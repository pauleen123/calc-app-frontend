import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import Puns from "./components/Puns";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/puns" component={Puns} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
