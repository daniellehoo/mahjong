import React, { useState, useEffect } from "react";
import data from "./data.js";
import "./App.css";

import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

function Main() {
  const [board, setBoard] = useState("one two three");
  const [selected, setSelected] = useState([]);
  return (
    <div>
      {/* {board.split(" ").map((id, index) => {
        return (
          <Card
            id={id}
            selected={selected[index]}
            callBack={() => {
              selected[index] = !selected[index];
              setSelected(selected.slice());
            }}
          />
        );
      })} */}
      <Data />
    </div>
  );
}

function Data() {
  let bambooArray = [];
  let numbersArray = [];
  let stonesArray = [];
  let windsArray = [];
  let dragonsArray = [];
  let flowersArray = [];
  let garbageCollector = [];

  data.map(item => {
    switch (item.suit) {
      case "Bamboo":
        bambooArray.indexOf(item.suit) === -1
          ? bambooArray.push(item.suit)
          : garbageCollector.push("");
        bambooArray.push(item.tile);
        break;
      case "Numbers":
        numbersArray.indexOf(item.suit) === -1
          ? numbersArray.push(item.suit)
          : garbageCollector.push("");
        numbersArray.push(item.tile);
        break;
      case "Stones":
        stonesArray.indexOf(item.suit) === -1
          ? stonesArray.push(item.suit)
          : garbageCollector.push("");
        stonesArray.push(item.tile);
        break;
      case "Winds":
        windsArray.indexOf(item.suit) === -1
          ? windsArray.push(item.suit)
          : garbageCollector.push("");
        windsArray.push(item.tile);
        break;
      case "Dragons":
        dragonsArray.indexOf(item.suit) === -1
          ? dragonsArray.push(item.suit)
          : garbageCollector.push("");
        dragonsArray.push(item.tile);
        break;
      case "Flowers":
        flowersArray.indexOf(item.suit) === -1
          ? flowersArray.push(item.suit)
          : garbageCollector.push("");
        flowersArray.push(item.tile);
      default:
        break;
    }
  });

  let allCardsArray = [
    bambooArray,
    numbersArray,
    stonesArray,
    windsArray,
    dragonsArray,
    flowersArray
  ];

  return (
    <div className="allCards">
      {allCardsArray.map((element, index) => {
        return <h1>{element}</h1>;
      })}
    </div>
  );
}

export { Main };
