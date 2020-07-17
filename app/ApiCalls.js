import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

async function getAllStrings() {
  try {
    const response = await axios.get(`${BASE_URL}/data`);
    return response;
  } catch (err) {
    console.error('API Error:', err.response);
    const { message } = err.response.data.message;
    throw Array.isArray(message) ? message : [message];
  }
}

async function prependString(string) {
  try {
    const res = await axios.post(`${BASE_URL}/data`, { string });

    return res;
  } catch (err) {
    console.error('API Error:', err.response);
    const { message } = err.response.data.message;
    throw Array.isArray(message) ? message : [message];
  }
}

export { getAllStrings, prependString };
