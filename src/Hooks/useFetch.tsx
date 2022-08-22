// import React from 'react';
import { Client } from '../Client/client';
import { useEffect, useState } from 'react';

export const useFetch = (content_type: string) => {
  const [data, setData] = useState<Promise<any>>();
  useEffect(() => {
    (async () => {
      try {
        const response: any = await Client.getEntries({
          content_type: content_type,
        });
        setData(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [content_type]);
  return data;
};
