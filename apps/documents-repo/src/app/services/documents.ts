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
