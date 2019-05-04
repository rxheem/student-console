import React from 'react';
import Container from 'react-bootstrap/Container';

const Page = props => {
  return (
    <Container fluid={props.fluid} className='page'>
      {props.children}
    </Container>
  );
};

export default Page;
