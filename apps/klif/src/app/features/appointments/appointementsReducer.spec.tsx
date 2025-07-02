import { configureStore } from '@reduxjs/toolkit';
import { appointmentReducer } from './appointmentsSlice';
import {
  reset,
  addPatient,
  addService,
  addContract,
  addMedicalStaff,
} from './appointmentsSlice';

describe('appointment reducer', () => {
  let store: ReturnType<typeof createTestStore>;

  const createTestStore = () => {
    return configureStore({
      reducer: {
        appointment: appointmentReducer,
      },
    });
  };

  beforeEach(() => {
    store = createTestStore();
  });

  it('powinien mieć ustawiony początkowy stan', () => {
    const state = store.getState();

    expect(state.appointment.patient).toBeNull();
    expect(state.appointment.service).toBeNull();
    expect(state.appointment.contract).toBeNull();
    expect(state.appointment.medicalStaff).toBeNull();
  });

  it('powinien dodać pacjenta', () => {
    const testPatient = {
      uuid: '123',
      firstName: 'Jan',
      lastName: 'Kowalski',
      pesel: '12345678901',
    };

    store.dispatch(addPatient(testPatient));
    const state = store.getState();

    expect(state.appointment.patient).toStrictEqual(testPatient);
  });

  it('powinien dodać usługę', () => {
    const testService = {
      uuid: '456',
      name: 'Konsultacja',
      code: 'KON-001',
      description: 'Konsultacja lekarska',
    };

    store.dispatch(addService(testService));
    const state = store.getState();

    expect(state.appointment.service).toStrictEqual(testService);
  });

  it('powinien dodać kontrakt', () => {
    const testContract = {
      uuid: '789',
      name: 'Kontrakt NFZ',
      price: 100,
    };

    store.dispatch(addContract(testContract));
    const state = store.getState();

    expect(state.appointment.contract).toStrictEqual(testContract);
  });

  it('powinien dodać personel medyczny', () => {
    const testMedicalStaff = {
      uuid: '101',
      firstName: 'Anna',
      lastName: 'Nowak',
      pesel: '98765432101',
      pwz: 'PWZ12345',
    };

    store.dispatch(addMedicalStaff(testMedicalStaff));
    const state = store.getState();

    expect(state.appointment.medicalStaff).toStrictEqual(testMedicalStaff);
  });

  it('powinien zresetować stan', () => {
    const testPatient = {
      uuid: '123',
      firstName: 'Jan',
      lastName: 'Kowalski',
      pesel: '12345678901',
    };

    store.dispatch(addPatient(testPatient));

    store.dispatch(reset());
    const state = store.getState();

    expect(state.appointment.patient).toBeNull();
    expect(state.appointment.service).toBeNull();
    expect(state.appointment.contract).toBeNull();
    expect(state.appointment.medicalStaff).toBeNull();
  });
});
