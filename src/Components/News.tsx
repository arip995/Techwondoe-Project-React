import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../Services/api.service';
import { sanitizeNewsData } from '../Services/sanitizer.service';
import { NewsData } from '../Models/News.type';
import Typography from '../stories/Components/Typography/Typography';
import { Button } from '../stories/Components/Button/Button';

export const News = () => {
  const [newsData, setNewsData] = useState<NewsData>();

  /**
   * Function to fetch and sanitize the Team data
   */
  const getNewsdata = () => {
    fetchNewsData()
      .then((data: any) => {
        const sanitizedData: NewsData = sanitizeNewsData(
          data?.items[0]?.fields
        );
        setNewsData(sanitizedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    getNewsdata();
    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);
  return (
    <div>
      <div className="w-full flex justify-center bg-[##E5E5E5]">
        <div className="lg:py-24 py-16 lg:w-2/3 w-full px-3">
          <div className="mb-6 flex justify-between items-center">
            <Typography
              className="text-[#111012]"
              type="h1"
              label={newsData?.title!}
            />
            <Button className="smb:hidden" label={newsData?.buttonText[0]!} />
            <Button
              className="sm:hidden"
              label={newsData?.buttonText[0]!}
              theme="secondary"
            />
          </div>
          <div className="flex flex-wrap justify-between">
            {newsData?.news?.map((element) => {
              return (
                <div
                  key={element.id}
                  className="xsm:min-w-[320px] lgb:m-2 text-left"
                >
                  <img
                    src={element?.newsImages}
                    className="xsm:min-w-[320px]"
                  />
                  <Typography
                    type="p2"
                    className="text-[#111012]"
                    label={element?.newsBy}
                  />
                  <Typography
                    type="h2"
                    className="text-[#111012]"
                    label={element?.newsDescription}
                  />
                  <div className="flex gap-1 items-center hover:cursor-pointer mt-10">
                    <Typography
                      className="text-[#E6692E]"
                      type="p1"
                      label={newsData?.buttonText[1]}
                    />
                    <img src={newsData?.readMoreIcon} className="mt-[4px]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
