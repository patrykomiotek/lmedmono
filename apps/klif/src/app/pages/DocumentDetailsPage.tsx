import { useParams } from 'react-router-dom';

export const DocumentDetailsPage = () => {
  const params = useParams<{ id: string }>();

  return <div>{params.id}</div>;
};
