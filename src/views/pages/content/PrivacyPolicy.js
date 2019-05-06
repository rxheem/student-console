import React from 'react';
import Page from '../essentials/Page';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PrivacyPolicy = props => {
  return (
    <Page header='Privacy Policy'>
      <Row>
        <Col sm={12} md={3} lg={3}>
          <div />
        </Col>
        <Col sm={12} md={9} lg={9}>
          {/* Overview */}
          <div id='overview'>
            <h4 className='h4'>Overview</h4>
            <p>
              This is an overview of the Privacy Policy and Information
              Protection Standards established to govern the use of the
              applicaiton and to protect your data.
            </p>
          </div>

          {/* Accepted devices */}
          <div id='acceptedDevices'>
            <h4 className='h4'>Accepted Devices and Browsers</h4>
            <p>
              You can access Connect Studio from almost any device, enabling
              ease of access, use and maximum productivity. There are, however,
              some devices that may not be able to load the application or
              display the elements properly on the screen. Some of these devices
              include:
            </p>
            <ul>
              <li>Blackberry devices</li>
              <li>iPhone 4 and below</li>
            </ul>

            <h5 className='h5'>Supported Browsers</h5>
            <ul>
              <li>Chrome 18 and later</li>
              <li>Firefox 24 and later</li>
              <li>Safari 7 or later</li>
              <li>Microsoft Edge</li>
              <li>
                Internet Explorer 11{' '}
                <span className='text-danger'>(not recommended)</span>
              </li>
            </ul>
            <span>
              You can find out which browser you are using{' '}
              <a href='https://www.whatsmybrowser.org/' target='_blank'>
                here.
              </a>
            </span>
          </div>
          <br />
        </Col>
      </Row>
    </Page>
  );
};

export default PrivacyPolicy;
