interface Patient {
  uuid: string;
  firstName: string;
  lastName: string;
  pesel: string;
}

interface Service {
  uuid: string;
  name: string;
  code: string;
  description: string;
}

interface Contract {
  uuid: string;
  name: string;
  price: number;
}

// {
//   patient: Patient | null,
//   service: Service | null,
//   contract: Contract | null,
//   medicalStaff: MedicalStaff | null
// },
// {
//   services: Service[]
// }

// 1. search Patient
// 2. Service (usługa wybierana z listy, porada lekarska, mozna wybrać np. 5 usług)
// 3. Contract dotyczy zarejestrowanej usługi (RegisteredService)
// 4. RegisterStaff (osoba, która rejestruje),
// 5. MedicalStaff (lekarz)
// RegisteredService (pozycja z wyborem usługi, jaki rozszerzony service)

// WizardForm
// Flow
// Confirm Details

// type Props = {}

type CustomType = 'a' | 'b' | 'c';
type CustomReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyService = CustomReadonly<Service>;

interface ExtendedService {
  uuid: string;
  name: string;
  service: Service;
  code: string;
  description: string;
}

interface RegisteredService {
  uuid: string;
  patient: Patient;
  contract: Contract;
  registrationStaff: RegisterStaff;
}

interface RegisteredServicePos {
  uuid: string;
  personel: MedicalStaff;
  contract: Contract;
  registrationStaff: RegisterStaff;
}

interface RegisterStaff {
  uuid: string;
  firstName: string;
  lastName: string;
  pesel: string;
}

interface MedicalStaff {
  uuid: string;
  firstName: string;
  lastName: string;
  pesel: string;
  pwz: string;
}

// interface PriceList {
//   uuid: string;
// }
