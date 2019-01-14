import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from "./components/Navbar";
import TopComponent from "./components/TopComponent";
import CategoryComponent from "./components/category/CategoriesComponent";
import LoginComponent from "./components/LoginComponent";
import SearchComponent from "./components/SearchComponent";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
              <Route exact path="/top" component={TopComponent}/>
              <Route exact path="/categories" component={CategoryComponent}/>
              <Route exact path="/search" component={LoginComponent}/>
              <Route exact path="/login" component={SearchComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;
