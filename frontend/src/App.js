import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from "./components/Navbar";
import TopComponent from "./components/TopComponent";
import MainComponent from "./components/MainComponent";
import CategoryComponent from "./components/category/CategoriesComponent";
import LoginComponent from "./components/LoginComponent";
import SearchComponent from "./components/SearchComponent";
import CategoryBook from "./components/category/CategoryBook";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>              <Route exact path="/" component={MainComponent}/>
              <Route exact path="/top" component={TopComponent}/>
              <Route exact path="/categories" component={CategoryComponent}/>
              <Route exact path="/login" component={LoginComponent}/>
              <Route exact path="/search" component={SearchComponent}/>
              <Route exact path="/categories/books/:cateid" component={CategoryBook}/>
          </div>
        </Router>
    );
  }
}

export default App;
