import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Home from './components/home/Home';

// Navigations
import About from './views/pages/content/About';
import Contact from './views/pages/content/Contact';
import TermsOfUse from './views/pages/content/TermsOfUse';
import PrivacyPolicy from './views/pages/content/PrivacyPolicy';
import Join from './views/pages/content/Join';

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

          {/* Page */}
                    <Route exact path='/join/' component={Join} />
          <Route exact path='/about/' component={About} />
          <Route exact path='/contact/' component={Contact} />
          <Route exact path='/terms-of-use/' component={TermsOfUse} />
          <Route exact path='/privacy-policy/' component={PrivacyPolicy} />
        </Switch>

        {/* Main Home Navigation */}
        <Route path='/' component={Footer} />
      </div>
    );
  }
}

export default App;
