import { fetchVolume, fetchVolumes } from '../api/volume.api';
import { toCamelCase, toSnakeCase } from '../utils';

export async function getVolumes(payload) {
  const params = toSnakeCase(payload);
  const resp = await fetchVolumes(params);
  return toCamelCase(resp);
}

export async function getVolume(id) {
  const resp = await fetchVolume(id);
  return toCamelCase(resp);
}
