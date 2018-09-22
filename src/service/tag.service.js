import { fetchTags } from '../api/tag.api';
import { toCamelCase } from '../utils';

export async function getTags() {
  const resp = await fetchTags();
  return toCamelCase(resp);
}
