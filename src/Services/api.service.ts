import { Client } from '../Client/client';

/**
 * handle all the api calls
 */
export const fetchData = async (content_type: string) => {
  try {
    const response: any = await Client.getEntries({
      content_type: content_type,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
