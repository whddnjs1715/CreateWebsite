import axios from 'axios';

const baseURL = 'https://codingapple1.github.io/shop/data2.json';

const baseInstance = axios.create({
  baseURL,
});

const apiRequest = {
  get: (url, request) => baseInstance.get(url, request),
  delete: (url, request) => baseInstance.delete(url, request),
  post: (url, data, config) => baseInstance.post(url, data, config),
};

export default apiRequest;
