import { useQuery } from '@tanstack/react-query';
import { fetchDocuments } from '../services/documents';

export const DocumentsList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Oh no!</h1>;
  }

  const documents = data;

  if (!documents) {
    return <h1>No documents</h1>;
  }

  return (
    <div>
      {documents.map((elem) => (
        <div key={elem.id}>
          <div>{elem.fields.title}</div>
        </div>
      ))}
    </div>
  );
};
