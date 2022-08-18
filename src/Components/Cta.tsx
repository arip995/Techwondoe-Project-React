import React, { useEffect, useState } from 'react';
import { fetchCtaData } from '../Services/api.service';
import { CtaData } from '../Models/Cta.type';
import { sanitizeCtaData } from '../Services/sanitizer.service';
import Typography from '../stories/Components/Typography/Typography';
import { Button } from '../stories/Components/Button/Button';
export const Cta = () => {
  const [ctaData, setCtaData] = useState<CtaData>();

  /**
   * Function to fetch and sanitize the Team data
   */
  const getCtaData = () => {
    fetchCtaData()
      .then((data) => {
        const sanitizedData: CtaData = sanitizeCtaData(data?.items[0]?.fields);
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
    getCtaData();

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
