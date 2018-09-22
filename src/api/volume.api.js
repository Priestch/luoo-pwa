import http from '../http';

export function fetchVolumes(params) {
  return http.get('/volumes', { params });
}

export function fetchVolume(id) {
  return http.get(`/volumes/${id}`);
}
