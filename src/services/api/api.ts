// Base da URL da sua API
export const API_BASE_URL = 'https://rest.coincap.io/v3';

// Chave de API (se precisar)
export const API_KEY = 'eb421b775f6a45d0f37144a0959c8f73ee1a58e9f06982cd4e995e56afc1a265'; // se não tiver, pode deixar vazio ou remover

// Headers padrão para requisições
export const defaultHeaders = {
  'Content-Type': 'application/json',
  // 'Authorization': `Bearer ${API_KEY}`, // se usar token
};