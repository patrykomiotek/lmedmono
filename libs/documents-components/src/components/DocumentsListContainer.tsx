import { useQuery } from '@tanstack/react-query';
import { fetchDocuments } from '../../../documents-services/src/documents';
import { DocumentsList } from './DocumentsList';

export const DocumentsListContainer = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });

  return (
    <div>
      <DocumentsList documents={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};
