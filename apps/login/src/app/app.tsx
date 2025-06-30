// import NxWelcome from './nx-welcome';

import { ErrorBoundary } from '@erezerwacja/common-ui';
import { LoginForm } from './components/LoginForm';

export function App() {
  return (
    <ErrorBoundary fallback={<p>App error</p>}>
      <div>
        {/* <NxWelcome title="@erezerwacja/login" /> */}
        <ErrorBoundary fallback={<p>Form error</p>}>
          <LoginForm />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}

export default App;
