// import React from 'react';
import { Client } from '../Client/client';
import { useEffect, useState } from 'react';

export const useFetch = (content_type: string) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await Client.getEntries({
          content_type: content_type,
        });
        const data = response;

        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [content_type]);
  return apiData;
};
