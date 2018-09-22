import _ from 'lodash';

function recursiveConvertKey(obj, converter) {
  if (_.isObject(obj)) {
    if (_.isArray(obj)) {
      return _.map(obj, item => {
        return recursiveConvertKey(item, converter);
      });
    }
    return _.reduce(
      obj,
      (result, value, key) => {
        const convertedKey = converter(key);
        result[convertedKey] = recursiveConvertKey(value, converter);
        return result;
      },
      {},
    );
  }
  return obj;
}

export function toSnakeCase(obj) {
  return recursiveConvertKey(obj, _.snakeCase);
}

export function toCamelCase(obj) {
  return recursiveConvertKey(obj, _.camelCase);
}
