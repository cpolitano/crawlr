"use strict";
import ReactDOM from "react-dom";
import React from "react";
const { Component } = React;
import { createStore, combineReducers } from "redux";


const spot = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        id: action.id,
        text: action.text,
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

const store = createStore(spots, {});

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch({
  id: 0,
  text: "big bear cafe",
  type: "ADD"
});

store.dispatch({
  id: 1,
  text: "showtime",
  type: "ADD"
});

class CrawlrApp extends Component {
  render() {
    let nextSpotId = 2
    return (
      <div>
        <h3>Best Neighborhood Spots</h3>
        <ul>
          {this.props.spots.map(spot => 
            <li key={spot.id}>
              {spot.text}
            </li>
          )}
        </ul>
        <input ref={ node => {
          this.input = node;
        }} />
        <button onClick={ () => {
          store.dispatch({
            type: "ADD",
            text: this.input.value,
            id: nextSpotId++
          });
          this.input.value = "";
        }}>add a spot</button>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <CrawlrApp spots={store.getState()} />,
    document.getElementById("react-crawlr-app")
  );
};

store.subscribe(render);
render();