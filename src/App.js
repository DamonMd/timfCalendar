import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Detail from './components/Detail';
import RouterExample from './components/routerExample/RouterExample';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="logo">
            <span className="icon">date_range</span>
            <span>Daily Logging <b>Calendar</b></span>
          </div>
        </header>
        <main>
          <Calendar/>
          <RouterExample/>
        </main>
      </div>
    );
  }
}

export default App;
