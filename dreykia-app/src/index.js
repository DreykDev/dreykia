import React from 'react';
import ReactDOM from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './pages/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUrl={window.location.origin}
    >

      <App />

    </Auth0Provider>

  </React.StrictMode>
);

reportWebVitals();