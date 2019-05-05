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
import ScrollReveal from 'scrollreveal';

// Importing Style
import './MinifiedSignIn.css';

class MinifiedSignIn extends Component {
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
      // Returns true if a match is found
      return true;
    }

    // Returns false if npt mobile.
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
        // Its tricky rearranging the styling for the minified sign in without making the component bloated
        // so a link to the sign in page will be displayed instead.
        <Link role='button' className='nav-link' to='/sign-in/'>
          Sign In
        </Link>
      );
    } else {
      return (
        <div fluid={true} id='Minified-Sign-In' className='si-minified'>
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
    }
  }
}

export default MinifiedSignIn;
