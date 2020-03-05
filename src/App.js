import React, { useState } from "react";
import {Main, Child} from "./Main.js";
import Suits from "./components/suits.js"
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/:id" children={<Child />} /> */}
          <Route path="/mahjong" children={<Main/>} />
          <Route path="/" children={<Suits/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;