import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { z } from 'zod';
import {
  addPatient,
  AppointmentState,
  selectAppointment,
} from '../../features/appointments/appointmentsSlice';
import { fetchPatients, fetchServices } from '../../services/services';

const formSchema = z.object({
  patient: z.string().min(1),
  service: z.string().min(1),
});

type FormDto = z.infer<typeof formSchema>;

export const RegistrationForm = () => {
  const [showSummary, setShowSummary] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<FormDto>({
    resolver: zodResolver(formSchema),
    // defaultValues: {

    // }
  });
  const dispatch = useAppDispatch();
  const appoinment: AppointmentState = useAppSelector(selectAppointment);

  const serviceSelectValue = watch('service');
  const patientSelectValue = watch('patient');

  // TODO: custom hook
  const { data: patients } = useQuery({
    queryKey: ['patients'],
    queryFn: fetchPatients,
  });

  // TODO: custom hook
  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  const handleForm: SubmitHandler<FormDto> = (data) => {
    setShowSummary(true);
  };

  useEffect(() => {
    // const patient = patients?.find((p) => p.uuid === value);
    // dispatch(addPatient(patient));
  }, [patientSelectValue]);

  const handlePatientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const patient = patients?.find((p) => p.uuid === value);

    if (patient) {
      dispatch(addPatient(patient));
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const service = services?.find((p) => p.uuid === value);

    if (service) {
      dispatch(addService(service));
    }
  };

  if (showSummary) {
    return (
      <div>
        <p>Pacjent: {appoinment.patient?.firstName}</p>
        <p>Usługa: {appoinment.service?.name}</p>
        <button onClick={() => setShowSummary(false)}>Edytuj form</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      {patients && (
        <div>
          <p>Wybierz pacjenta</p>
          <select
            id={'patientSelect'}
            {...register('patient')}
            onChange={handlePatientChange}
          >
            <option value="">Wybierz pacjenta</option>
            {patients.map((p) => (
              <option key={`${p.uuid}`} value={p.uuid}>
                {p.firstName + ' ' + p.lastName}
              </option>
            ))}
          </select>
        </div>
      )}

      {patientSelectValue && services && (
        <div>
          <p>Wybierz usluge</p>
          <select
            id={'serviceSelect'}
            {...register('service')}
            onChange={handleServiceChange}
          >
            <option value="">Wybierz serwis</option>
            {services.map((p) => (
              <option key={`${p.uuid}`} value={p.uuid}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <button type="submit">{isSubmitting ? 'Sending...' : 'Send'}</button>
      </div>
    </form>
  );
};
