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
        setApiData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return [apiData];
};
