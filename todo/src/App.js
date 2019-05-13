import React, { Component } from "react";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
