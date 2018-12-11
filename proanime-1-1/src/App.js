import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/" component={About} />
            <Route path="/" component={Movies} />
        </div>
      </Router>
    );
  }
}

export default App;
