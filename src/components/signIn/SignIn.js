import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';
import PopUpOverlay from '../../common/PopUpOverlay';

import './SignIn.css';

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

  render() {
    return (
      <Container fluid={true}>
        <div id='Sign-In' className='sign-in'>
          <Form className='animated fadeIn'>
            {/* Header */}
            <h1>Sign in to get started</h1>
            {/* Email */}
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name='email'
                type='email'
                placeholder='Enter email'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />

              {/* Form text disclaimer for the user */}
              <Form.Text className='text-muted'>
                Your email will only be used for verification purposes. We'll
                never share your email with anyone else and we'll never send you
                spam.
              </Form.Text>
            </Form.Group>
            {/* Password */}
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                type='password'
                placeholder='Enter secure password'
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>
            {/* Forgot password */}
            <div className='forgot-password'>
              <Link to='/forgot-password/'>Forgot password</Link>
            </div>
            <Form.Group controlId=''>
              <PopUpOverlay
                key='left'
                placement='left'
                tooltip='Do not check this box if you are using a shared device.'
              >
                <Form.Check type='checkbox' label='Keep me signed in' />
              </PopUpOverlay>
            </Form.Group>
            <Button>Sign In</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignIn;
