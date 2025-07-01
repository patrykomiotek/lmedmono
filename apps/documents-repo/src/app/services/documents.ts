import { AirtableListResponse, DocumentDto } from '../types/Documents';
import { api } from './api';

export const fetchDocuments = async () => {
  try {
    const response = await api.get<AirtableListResponse<DocumentDto>>(
      '/documents'
    );
    return response.data.records;
  } catch {
    console.log('Error fetchDocuments');
    return null;
  }
};

export const fetchDocument = async (id?: string) => {
  if (!id) {
    throw new Error('Id is required');
  }

  try {
    const response = await api.get<DocumentDto>(`/documents/${id}`);
    return response.data;
  } catch {
    console.log(`Error fetch document: ${id}`);
    return null;
  }
};

// { title, notes, type }

export const createDocument = async (input: {
  title: string;
  notes: string;
  type: string;
}) => {
  try {
    const payload = {
      records: [
        {
          fields: {
            ...input,
          },
        },
      ],
    };

    const response = await api.post<DocumentDto>('/documents', payload);
    return response.data;
  } catch {
    console.log(`Error creating document`);
    return null;
  }
};
