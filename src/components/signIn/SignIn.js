import React, { Component } from 'react';

// All bootstrap components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // Sets the state
    this.state = {
      email: '',
      password: '',
      keepSignedIn: false
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
        <div fluid={true} id='SignIn'>
          <Form className='ml-auto'>
            <Form.Row>
              {/* Email or username */}
              <Form.Group
                as={Col}
                controlId='email'
                style={{ display: 'flex' }}
              >
                <Form.Label
                  style={{ paddingRight: '10px', paddingTop: ' 6px' }}
                >
                  Email
                </Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group
                as={Col}
                controlId='password'
                style={{ display: 'flex', paddingRight: '2rem' }}
              >
                <Form.Label
                  style={{ paddingRight: '10px', paddingTop: ' 6px' }}
                >
                  Password
                </Form.Label>
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
      return (
        <Container>
          <Form>This is the normal sign in </Form>
        </Container>
      );
    }
  }
}

export default SignIn;
