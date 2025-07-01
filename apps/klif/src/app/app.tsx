import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DocumentsPage } from './pages/DocumentsPage';
import { DocumentDetailsPage } from './pages/DocumentDetailsPage';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="@erezerwacja/klif" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/documents">Documents</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents/:id" element={<DocumentDetailsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
