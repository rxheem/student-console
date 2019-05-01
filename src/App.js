import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Home from './components/home/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div id='App' className='App'>
        <p>This is the main application</p>

        <Home />
      </div>
    );
  }
}

export default App;
