import { Client } from '../Client/client';

/**
 * Request to get all the data for navbar
 */
export const fetchNavbarData = async () => {
  try {
    const response: any = await Client.getEntries({ content_type: 'navbar' });
    return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Request to get all the data for navbar
 */
export const fetchHeaderImageData = async () => {
  try {
    const response: any = await Client.getEntries({
      content_type: 'headerImage',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Request to get all the data for navbar
 */
export const fetchTeamData = async () => {
  try {
    const response: any = await Client.getEntries({
      content_type: 'team',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Request to get all the data for CTA
 */
export const fetchCta = async () => {
  try {
    const response: any = await Client.getEntries({
      content_type: 'cta',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
