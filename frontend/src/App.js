import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from "./components/Navbar";
import CategoryComponent from "./components/CategoryComponent";
import TopComponent from "./components/TopComponent";
import LoginComponent from "./components/LoginComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <LoginComponent/>
      </div>
    );
  }
}

export default App;
