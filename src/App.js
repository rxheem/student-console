import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Home from './components/home/Home';

// Components
import HomeNavigation from './components/homeNavigation/HomeNavigation';
import SignIn from './components/signIn/SignIn';

// Views
import Footer from './views/footer/Footer';

// Main app class
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div id='App' className='App'>
        {/* Main Home Navigation */}
        <Route path='/' component={HomeNavigation} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-in/' component={SignIn} />
        </Switch>

        {/* Main Home Navigation */}
        <Route path='/' component={Footer} />
      </div>
    );
  }
}

export default App;
