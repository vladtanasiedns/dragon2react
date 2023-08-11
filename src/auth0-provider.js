import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    console.log(process.env)
    const navigate = useNavigate();
    const domain = process.env.REACT_APP_DOMAIN;
    const clientId = process.env.REACT_APP_CLIENT_ID;

    const onRedirectCallback = (appState) => {
        window.history.replaceState({}, document.title, window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;
