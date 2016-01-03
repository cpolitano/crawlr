"use strict";
import ReactDOM from "react-dom";
import React from "react";
const { Component } = React;
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import SpotsList from "./nearby-spots";

const spot = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        id: action.id,
        name: action.name,
        visited: false
      };
    case "TOGGLE":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        visited: !state.visited
      };
    case "GET_SPOTS":
      return {
        id: action.id,
        name: action.name,
        visited: false
      };
    default:
      return state;
  }
}

const spots = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        spot(undefined, action)
      ];
    case "TOGGLE":
      return state.map(s => spot(s, action))
    case "GET_SPOTS":
      action.spots.map(s => 
        [
          ...state,
          spot(undefined, action)
        ]
      );
      return state;
    default:
      return state;
  }
}

const getSpots = (state = [], action) => {
  switch (action.type) {
    case "GET_SPOTS":
      return [
        ...state,
        action.spots
      ]
    default:
      return state;
  }
}

// const store = createStore(spots, {});
const crawlrApp = combineReducers({
  spots,
  getSpots
});

// store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch({
//   id: 0,
//   name: "big bear cafe",
//   type: "ADD"
// });

// store.dispatch({
//   id: 1,
//   name: "showtime",
//   type: "ADD"
// });

let nextSpotId = 2;

const CrawlrApp = () => (
  <div>
    <h3>Best Neighborhood Spots</h3>
    <SpotsList />
  </div>
);

ReactDOM.render(
  <Provider store={ createStore(crawlrApp) }>
    <CrawlrApp />
  </Provider>,
  document.getElementById("react-crawlr-app")
);
