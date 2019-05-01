import React, { Component } from 'react';

// All bootstrap components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // Sets the state
    this.state = {
      email: '',
      password: ''
    };
  }

  // Handles the event changes for the email and password
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  componentDidMount() {}

  render() {
    if (this.props.isMinified) {
      return (
        <div id='SignIn'>
          <Form>
            <Form.Row>
              {/* Email or username */}
              <Form.Group as={Col} controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group as={Col} controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Enter password'
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      );
    } else {
      return <Form>This is the normal sign in </Form>;
    }
  }
}

export default SignIn;
