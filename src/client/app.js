"use strict";
import ReactDOM from "react-dom";
import React from "react";
const { Component } = React;
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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
    default:
      return state;
  }
}

const getSpots = (state = [], action) => {
  switch (action.type) {
    case "GET_SPOTS":
      return action.spots;
    default:
      return state;
  }
}

const crawlrApp = combineReducers({
  spots,
  getSpots
});

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const CrawlrApp = () => (
  <div>
    <SpotsList />
  </div>
);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(crawlrApp) }>
    <CrawlrApp />
  </Provider>,
  document.getElementById("react-crawlr-app")
);
