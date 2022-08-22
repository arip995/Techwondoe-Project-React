import React, { useEffect, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

const TryCustomHook = () => {
  const [data, setData] = useState('cta');
  const fetchData = useFetch(data);
  const handle = () => {
    setData('footer');
  };

  useEffect(() => {
    console.log(fetchData);
  }, [fetchData]);
  return <div onClick={handle}></div>;
};

export default TryCustomHook;
