"use strict";
import ReactDOM from "react-dom";
import React from "react";
const { Component } = React;
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider, connect } from "react-redux";
import { spots, getSpots } from "./js/reducers";
import SpotsList from "./nearby-spots";

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
