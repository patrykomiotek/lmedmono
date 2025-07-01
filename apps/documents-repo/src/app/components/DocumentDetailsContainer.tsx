import { useQuery } from '@tanstack/react-query';

import { fetchDocument } from '../services/documents';
import { DocumentsDetails } from '../components/DocumentDetails';

export const DocumentDetailsContainer = ({
  publicId,
}: {
  publicId: string;
}) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['documents', publicId],
    queryFn: () => fetchDocument(publicId),
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
