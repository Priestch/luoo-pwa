import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
});

http.interceptors.response.use(onResponse, onError);

function onResponse(response) {
  return response.data;
}

function onError(error) {
  return Promise.reject(error);
}

export default http;
