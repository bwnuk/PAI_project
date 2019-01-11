import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from "./components/Navbar";
import CategoryComponent from "./components/CategoryComponent";
import TopComponent from "./components/TopComponent";
import LoginComponent from "./components/login/LoginComponent";
import SearchComponent from "./components/SearchComponent";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/top" component={TopComponent}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/category" component={CategoryComponent}/>
                <Route exact path="/search" component={SearchComponent}/>
            </div>
        </Router>
    );
  }
}

export default App;
