import React, { useState, useEffect } from "react";
import data from "../data.js";
import "../App.css";

import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

function Suits() {
  let suitArray = [];
  let garbageCollector = [];
  data.map(suit => {
    suitArray.indexOf(suit.suit) === -1
      ? suitArray.push(suit.suit)
      : garbageCollector.push("");
  });

  return (
    <div className="landing">
      <h1>Mahjong</h1>
      {suitArray.map(suits => {
        return <h2 className="suits">{suits}</h2>;
      })}
    </div>
  );
}

export default Suits;
