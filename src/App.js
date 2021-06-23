//import logo from "./logo.svg";
import "./App.css";
import { Dotacard } from "./component/testcard";
import { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { Header } from "./component/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage";
import DotaHeroPage from "./pages/dota-hero";
import ProPlayerPage from "./pages/pro-player";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Header />
        </nav>

        <Switch>
          <Route path="/dota-hero">
            <DotaHeroPage />
          </Route>
          <Route path="/pro-player">
            <ProPlayerPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
