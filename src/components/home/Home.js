import React, { Component } from 'react';
import SignIn from '../signIn/SignIn';
import Page from '../../views/pages/Page';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <span />
        <Page fluid={false}>

        </Page>
      </div>
    );
  }
}

export default Home;
