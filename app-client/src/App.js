import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/jumbotron/Jumbotron'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Search from './components/search/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Jumbotron/>
            <div className="container">
              <Route exact path ="/" component={Search}/>

            </div>
          </div>
        </Router>        
      </div>
    );
  }
}

export default App;
