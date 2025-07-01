import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div role="navigation">
      <ul className="flex space-x-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/documents">Documents</Link>
        </li>
        <li>
          <Link to="/documents-create">Create</Link>
        </li>
      </ul>
    </div>
  );
};
