import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <Container>
        <div id='Sign-In' className='sign-in'>
          <Form className='animated fadeIn'>
            {/* Email */}
            <Form.Group controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />

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
              <Form.Control type='password' placeholder='Enter password' />
            </Form.Group>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignIn;
