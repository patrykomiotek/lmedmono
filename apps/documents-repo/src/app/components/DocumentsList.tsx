import { DocumentDto } from '../types/Documents';

interface Props {
  documents: DocumentDto[] | null | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const DocumentsList = ({ documents, isLoading, isError }: Props) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Oh no!</h1>;
  }

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
