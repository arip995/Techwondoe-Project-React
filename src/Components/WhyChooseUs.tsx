import React, { useEffect, useState } from 'react';
import { fetchWhyChooseUsData } from '../Services/api.service';
import { sanitizeWhyChooseUsData } from '../Services/sanitizer.service';
import { WhyChooseUsData } from '../Model/WhyChooseUs.type';
import { Typography } from '../stories/Components/Typography/Typography';
import { WhyChoose } from '../stories/Components/WhyChooseUs/WhyChooseUs';

export const WhyChooseUs = () => {
  const [whyData, setWhyData] = useState<WhyChooseUsData>();

  /**
   * Function to fetch and sanitize the Team data
   */
  const getWhyChooseUsData = () => {
    fetchWhyChooseUsData()
      .then((data: any) => {
        const sanitizedData: WhyChooseUsData = sanitizeWhyChooseUsData(
          data?.items[0]?.fields
        );
        setWhyData(sanitizedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    getWhyChooseUsData();
    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);
  return (
    <div className="w-full flex justify-center bg-[#E5E5E5]">
      <div className="lg:w-2/3 w-full py-14 lg:py-24 m-4">
        <div className="w-full text-center">
          <Typography className="mb-4" label={whyData?.title!} type="h1" />
          <Typography
            className="mb-6"
            label={whyData?.description!}
            type="p1"
          />
        </div>
        <div className="w-full flex flex-wrap gap-5 justify-between">
          {whyData?.contents.map((elements) => {
            return (
              <div key={elements.id} className="sm:w-[307px] w-full">
                <WhyChoose
                  iconUrl={whyData.tickIcon}
                  headinglabel={elements.value!}
                  headingType="h2"
                  paragraphLabel={whyData.contentDescription!}
                  paragraphType="p2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
