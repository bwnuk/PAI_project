import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from "./components/Navbar";
import CategoryComponent from "./components/CategoryComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <CategoryComponent/>
      </div>
    );
  }
}

export default App;
