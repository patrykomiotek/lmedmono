import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactKeycloakProvider } from '@react-keycloak/web';
// import { KeycloakProvider } from "keycloak-react-web";

import { keycloak } from './keycloak';

import App from './app/app';

import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

const initOptions = {
  onLoad: 'check-sso', // Silently check for an existing SSO session
  pkceMethod: 'S256',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
};

root.render(
  // <StrictMode> dont work in dev mode
  <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </ReactKeycloakProvider>
  // </StrictMode>
);
