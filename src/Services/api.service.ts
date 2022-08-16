import { Client } from '../Client/client';
export const getNavbarData = async () => {
  try {
    const response: any = await Client.getEntries({ content_type: 'navbar' });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
