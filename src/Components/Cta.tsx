import React, { useEffect, useState } from 'react';
import { fetchData } from '../Services/api.service';
import { CtaData } from '../Models/Cta.type';
import { sanitizeCtaData } from '../Services/sanitizer.service';
import { setCacheData } from '../Services/setCache.service';
import { getCacheData } from '../Services/getCache.service';
import Typography from '../stories/Components/Typography/Typography';
import Button from '../stories/Components/Button/Button';

const Cta = () => {
  const [ctaData, setCtaData] = useState<CtaData>();

  /**
   * Function to fetch and sanitize the Team data
   */
  const getCtaData = () => {
    fetchData('cta')
      .then((data) => {
        const sanitizedData: CtaData = sanitizeCtaData(data?.items[0]?.fields);
        setCacheData('cta', sanitizedData, 86400000);
        setCtaData(sanitizedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    var cachedData: CtaData | null = getCacheData('cta');
    if (cachedData) {
      setCtaData(cachedData);
    } else {
      getCtaData();
    }

    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);
  return (
    <div className="w-full flex justify-center items-center bg-[#E6692E]">
      <div className="lg:py-24 lgb:py-12 text-center lg:w-1/2 lgb:w-10/12">
        <Typography
          className="text-[#ffffff] mb-4"
          label={ctaData?.title!}
          type="h1"
        />
        <Typography
          className="text-[#ffffff] lg:mb-6 mb-4"
          label={ctaData?.description!}
          type="p1"
        />
        <Button label={ctaData?.buttonText!} theme="secondary" />
      </div>
    </div>
  );
};

export default React.memo(Cta);
