import { AirtableListResponse, DocumentDto } from './types/Document.js';
import { api } from './api';
// import axios, { AxiosStatic } from 'axios';

// class DocumentService {
//   api: AxiosStatic | undefined;

//   constructor(API_BASE_URL: string, API_TOKEN: string) {
//     this.api = axios.create({
//       baseURL: API_BASE_URL,
//       headers: {
//         Authorization: `Bearer ${API_TOKEN}`,
//       },
//     })

//     fetchDocuments = async () => {
//       try {
//         const response = await api.get<AirtableListResponse<DocumentDto>>(
//           '/documents'
//         );
//         return response.data.records;
//       } catch {
//         console.log('Error fetchDocuments');
//         return null;
//       }
//   }
// }

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
