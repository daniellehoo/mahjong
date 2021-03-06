import React, { useState, useEffect } from "react";
import data from "./data.js";
import "./App.css";

import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

function Main() {
  return (
    <div>
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
      <Link to='/'><h3>Home</h3></Link>
      {allCardsArray.map((element, index) => {
        return <h1>{element}</h1>;
      })}
    </div>
  );
}

function Suit() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  let suits = [];
  let garbageCollector = [];
  data.map(item => {
    item.suit.toLowerCase() == id ? suits.push(item.tile) : garbageCollector.push('');
    console.log(suits)
  })
  // let card = suits.find(item => item.id == id);
  return (
    <div className="suitPage">
        <Link to="/">Home</Link>
      <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
      {suits.map(item => {
        return (<h2>{item}</h2>)
      })}
    
    </div>
  );
}

export { Main, Suit };
