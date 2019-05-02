import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Home from './components/home/Home';
import HomeNavigation from './components/homeNavigation/HomeNavigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div id='App' className='App'>
        <HomeNavigation />
        <Home />
      </div>
    );
  }
}

export default App;
