import { useParams } from 'react-router-dom';

import { DocumentDetailsContainer } from '@erezerwacja/documents-components';

export const DocumentDetailsPage = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>{params.id && <DocumentDetailsContainer publicId={params.id} />}</div>
  );
};
