import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 100,
  };
  apiKey = "af81796b148f4efb8ba4495d3ffea322"
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          height={2}
        />

        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey={this.apiKey} country={"in"} category={"health"} />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={this.apiKey} country={"in"} category={"sports"} />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}