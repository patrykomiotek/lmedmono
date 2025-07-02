import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import {
  Contract,
  Patient,
  Service,
  MedicalStaff,
} from '../../../contracts/Contracts';

interface AppointmentState {
  patient: Patient | null;
  service: Service | null;
  contract: Contract | null;
  medicalStaff: MedicalStaff | null;
}

const initialState: AppointmentState = {
  patient: null,
  service: null,
  contract: null,
  medicalStaff: null,
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    reset: () => initialState,
    addPatient: (state, action: PayloadAction<Patient | null>) => {
      state.patient = action.payload;
    },
    addService: (state, action: PayloadAction<Service | null>) => {
      state.service = action.payload;
    },
    addContract: (state, action: PayloadAction<Contract | null>) => {
      state.contract = action.payload;
    },
    addMedicalStaff: (state, action: PayloadAction<MedicalStaff | null>) => {
      state.medicalStaff = action.payload;
    },
  },
});

export const { reset, addPatient, addService, addContract, addMedicalStaff } =
  appointmentSlice.actions;

export const selectAppointment = (state: RootState) => state.appointment;
export const appointmentReducer = appointmentSlice.reducer;
