import { createClient } from 'contentful';
export const Client = createClient({
  space: process.env.REACT_APP_SPACE_ID!,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN!,
});
