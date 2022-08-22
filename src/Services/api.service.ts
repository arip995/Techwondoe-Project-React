import { Client } from '../Client/client';

/**
 * Handle all the api calls
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
