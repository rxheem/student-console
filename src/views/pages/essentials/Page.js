import React from 'react';
import Container from 'react-bootstrap/Container';

const Page = props => {
  return (
    <Container fluid={props.fluid} className='page'>
      <div>
        <h1>{props.header}</h1>
        <small className='text-muted'>{props.description}</small>
      </div>
      {props.children}
    </Container>
  );
};

export default Page;
