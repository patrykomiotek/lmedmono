export interface AirtableListResponse<T> {
  records: T[];
}

export interface DocumentDto {
  id: string;
  createdTime: string;
  fields: {
    title: string;
    notes: string;
    type: string;
    created_at: string;
    updated_at: string;
  };
}
