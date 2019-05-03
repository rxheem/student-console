import React from 'react';

const Page = props => {
  return (
    <div id='page' className='page'>

      {props.children}
    </div>
  )
}

export default Page;
