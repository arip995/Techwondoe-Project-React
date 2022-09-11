const localstoraqge = require('localstorage-ttl');
/**
 *
 * @param key
 * @param value
 * @param ttl
 */
export const setCacheData = (key: string, value: any, ttl: number) => {
  localstoraqge.set(key, value, [ttl]);
};

/**
 *
 * @param content_type
 */

export const getCacheData = (content_type: string) => {
  var data = localstoraqge.get(content_type);
  if (data) {
    return data;
  } else {
    return null;
  }
};
