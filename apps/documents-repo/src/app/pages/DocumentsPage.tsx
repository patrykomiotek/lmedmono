import { useQuery } from '@tanstack/react-query';
import { DocumentsList } from '../components/DocumentsList';
import { fetchDocuments } from '../services/documents';

export const DocumentsPage = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });

  return (
    <div>
      <h1 className="text-3xl">Documents</h1>
      <DocumentsList documents={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};
