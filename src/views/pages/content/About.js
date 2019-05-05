import React from 'react';
import Page from '../essentials/Page';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = props => {
  return (
    <Page fluid={false} header='About' description=''>
      <Row>
        <Col sm={3}>Left</Col>
        <Col>Right</Col>
      </Row>
    </Page>
  );
};

export default About;
