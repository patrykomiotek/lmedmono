import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchDocument } from '../services/documents';
import { DocumentsDetails } from '../components/DocumentDetails';

export const DocumentsDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const { data, isError, isLoading } = useQuery({
    queryKey: ['documents', params.id],
    queryFn: () => fetchDocument(params.id),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Oh no!</h1>;
  }

  return (
    <div>
      {data && <DocumentsDetails document={data} />}
      {!data && <p>Not found!</p>}
    </div>
  );
};
