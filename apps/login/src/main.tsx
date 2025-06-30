import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { envSchema } from './validateEnvVars';

import './styles.css';

// try {
envSchema.parse(import.meta.env);
// } catch (error) {
// console.log(`Validation error: `, error);
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
