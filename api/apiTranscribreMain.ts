import axios from 'axios';

const apiTranscribeMain = axios.create({
  baseURL: 'http://localhost:3007/',
  timeout: 5000,
});

export default apiTranscribeMain;
