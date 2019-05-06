import React from 'react';
import Page from '../essentials/Page';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = props => {
  return (
    <Page fluid={false} header='About' description=''>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <div />
        </Col>
        <Col sm={12} md={9} lg={9}>
          <span>
            From capturing student records, tracking assessment grades to
            detention mangement, <b>Console Studio</b> was designed with ease
            and simplicity in mind for all users.
          </span>
          <br />
          <br />
        </Col>
      </Row>
    </Page>
  );
};

export default About;
