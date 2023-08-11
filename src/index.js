import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env)
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const onRedirectCallback = (appState) => {
  console.log(appState)
  window.history.replaceState({}, document.title, window.location.pathname);
};

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    issuer={`https://${domain}/`}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    authorizationParams={{
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: 'openid profile email',
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

//AuthO secrets
// audience = https://dev-backoffice.dandsltd.com/api/
// client id = UPpJ3BOrFKIXk2F68ZmW1PGiSQLaVClB
// domain = dev-agqj-vzv.us.auth0.com

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
