import express from 'express';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

const services = [
  {
    uuid: '456',
    name: 'Konsultacja 1',
    code: 'KON-001',
    description: 'Konsultacja lekarska',
  },
  {
    uuid: '678',
    name: 'Konsultacja 2',
    code: 'KON-003',
    description: 'Konsultacja inna',
  },
];

// http://localhost:3000
app.get('/services', (req, res) => {
  res.send(services);
});
app.get('/services/456', (req, res) => {
  res.send(services[0]);
});
app.get('/services/678', (req, res) => {
  res.send(services[1]);
});

const contracts = [
  {
    uuid: '789',
    name: 'Kontrakt NFZ',
    price: 100,
  },
  {
    uuid: '346',
    name: 'Kontrakt ABC',
    price: 200,
  },
];

app.get('/contracts', (req, res) => {
  res.send(contracts);
});
app.get('/contracts/789', (req, res) => {
  res.send(contracts[0]);
});
app.get('/contracts/346', (req, res) => {
  res.send(contracts[1]);
});

const patient = {
  uuid: '123',
  firstName: 'Jan',
  lastName: 'Kowalski',
  pesel: '12345678901',
};

app.get('/patients', (req, res) => {
  res.send([patient]);
});
app.get('/patients/123', (req, res) => {
  res.send(patient);
});

const testMedicalStaff = {
  uuid: '101',
  firstName: 'Anna',
  lastName: 'Nowak',
  pesel: '98765432101',
  pwz: 'PWZ12345',
};

app.get('/medstuff', (req, res) => {
  res.send([testMedicalStaff]);
});
app.get('/medstuff/101', (req, res) => {
  res.send(testMedicalStaff);
});

app.use(
  cors({
    origin: 'http://localhost:4900',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
