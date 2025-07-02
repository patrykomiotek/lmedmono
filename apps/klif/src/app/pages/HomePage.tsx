import { useKeycloak } from '@react-keycloak/web';
import { logger } from '../../logger/logger';
import { Counter } from '../features/registration/Counter';
import { useState } from 'react';
import axios from 'axios';

export const HomePage = () => {
  const { keycloak, initialized } = useKeycloak();
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (keycloak.authenticated) {
      try {
        const response = await axios.get(
          'http://your-backend-api.com/protected-endpoint',
          {
            headers: {
              Authorization: `Bearer ${keycloak.token}`,
            },
          }
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(`Failed to fetch data`);
        setData(null);
      }
    } else {
      setError('Not authenticated to fetch data.');
    }
  };

  const handleClick = () => {
    logger.info('Hello!');

    try {
      throw new Error('Hello!');
    } catch (err) {
      logger.error({ err }, 'Oh no!');
    }
  };

  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <p>hello from home?</p>
      <button onClick={handleClick}>Click me</button>

      <p>Keycloak: {initialized}</p>
      {keycloak.authenticated ? (
        <div>
          <p>User is authenticated!</p>
          <p>Username: {keycloak.tokenParsed?.preferred_username}</p>
          <p>Access Token: {keycloak.token}</p>
          <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <p>User is NOT authenticated.</p>
          <button onClick={() => keycloak.login()}>Login</button>
        </div>
      )}
      {keycloak.hasRealmRole('admin') && (
        <p>You have the 'admin' role in this realm!</p>
      )}

      <button onClick={fetchData}>Fetch Protected Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Counter />
    </div>
  );
};
