import React, { Component } from 'react';
import SignIn from '../signIn/SignIn';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <p>This is home</p>
        <SignIn isMinified={true} />
      </div>
    );
  }
}
