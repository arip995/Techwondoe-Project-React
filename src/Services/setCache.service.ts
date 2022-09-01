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
