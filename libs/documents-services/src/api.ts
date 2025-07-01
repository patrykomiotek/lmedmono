import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

// TODO: add config vars or inject from application
const API_BASE_URL = 'https://api.airtable.com/v0/appFe97kECDhM67LZ';
const API_TOKEN =
  'patQWcyuM9mzgiJ3G.31814bcb93cf86c0c61066fae9edff952433fb8c0c07abc2d0676d9bd651a208';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
