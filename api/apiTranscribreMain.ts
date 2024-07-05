import axios from 'axios';

const apiTranscribeMain = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

export default apiTranscribeMain;
