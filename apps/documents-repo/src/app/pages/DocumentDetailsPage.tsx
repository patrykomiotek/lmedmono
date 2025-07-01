import { useParams } from 'react-router-dom';

import { DocumentDetailsContainer } from '../components/DocumentDetailsContainer';

export const DocumentDetailsPage = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>{params.id && <DocumentDetailsContainer publicId={params.id} />}</div>
  );
};
