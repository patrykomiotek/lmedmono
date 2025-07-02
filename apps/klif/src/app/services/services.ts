import { Patient, Service } from '../../contracts/Contracts';
import { api } from './api';

export const fetchPatients = async () => {
  try {
    const response = await api.get<Patient[]>('/patients');
    return response.data;
  } catch {
    console.log('Error fetchPatients');
    return null;
  }
};

export const fetchServices = async () => {
  try {
    const response = await api.get<Service[]>('/services');
    return response.data;
  } catch {
    console.log('Error fetchPatients');
    return null;
  }
};
