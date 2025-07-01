import { DocumentDto } from '@erezerwacja/documents-services';
// import { DocumentDto } from '../../../documents-services/src/types/Document';

interface Props {
  document: DocumentDto;
}

export const DocumentsDetails = ({ document }: Props) => {
  return (
    <div>
      <h1 className="text-3xl">{document.fields.title}</h1>
      <p>{document.fields.notes}</p>
    </div>
  );
};
