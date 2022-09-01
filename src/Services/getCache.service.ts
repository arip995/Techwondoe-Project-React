const localstoraqge = require('localstorage-ttl');

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
