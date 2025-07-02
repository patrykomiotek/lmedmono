import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/', // Your Keycloak URL
  realm: 'klif-web', // Your Keycloak realm
  clientId: 'klif-react', // The client ID for this specific app
};

export const keycloak = new Keycloak(keycloakConfig);
