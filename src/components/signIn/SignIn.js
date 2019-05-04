import React, { Component } from 'react';

// All bootstrap components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

// jQuery
import $ from 'jquery';

// Importing Style
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

  isMobile = function() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }

    return false;
  };

  // Handles the event changes for the email and password
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  componentDidMount() {}

  render() {
    if (this.isMobile()) {
      return (
        <Link role='button' className='nav-link'>
          Sign In
        </Link>
      );
    } else {
      if (this.props.isMinified) {
        return (
          <div fluid={true} id='Sign-In' className='si-minified'>
            <Form>
              <Form.Row>
                {/* Email or username */}
                <Form.Group as={Col} controlId='email' className='frm-group'>
                  <Form.Label
                    style={{
                      paddingRight: '10px',
                      paddingTop: ' 6px'
                    }}
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
                <Form.Group as={Col} controlId='password' className='frm-group'>
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
                <Button id='btnSignIn' primary>
                  Sign In
                </Button>
              </Form.Row>

              {/* Forgot password section */}
              <div className='si-forgot-password'>
                <Link className='nav-item'>Forgot Password</Link>
              </div>
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
}

export default SignIn;
