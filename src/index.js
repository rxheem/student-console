import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Vendor CSS files
import './assets/vendor/css/normalize.css';
import './assets/vendor/css/animate.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
