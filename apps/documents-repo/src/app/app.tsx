import { Menu } from './components/Menu';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DocumentsPage } from './pages/DocumentsPage';
import { CreateDocumentPage } from './pages/CreateDocumentPage';

export function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/documents-create" element={<CreateDocumentPage />} />
        {/* <Route path="*" element={<Page404 />} */}
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
