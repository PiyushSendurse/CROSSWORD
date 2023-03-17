import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/customer/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
