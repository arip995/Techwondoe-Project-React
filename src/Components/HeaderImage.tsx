import React, { useEffect, useState } from 'react';
import { setCacheData, getCacheData } from '../Services/cache.service';
import { fetchData } from '../Services/api.service';
import { sanitizeHeaderImageData } from '../Services/sanitizer.service';
import { HeaderImageData } from '../Models/HeaderImage.type';

const HeaderImage = () => {
  const [imageData, setImageData] = useState<HeaderImageData>();

  /**
   * Function to fetch and sanitize the header image data
   */
  const getHeaderImageData = () => {
    fetchData('headerImage')
      .then((data) => {
        const sanitizedData: HeaderImageData = sanitizeHeaderImageData(
          data?.items[0]?.fields
        );
        setCacheData('headerImage', sanitizedData, 86400000);
        setImageData(sanitizedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    var cachedData: HeaderImageData | null = getCacheData('headerImage');
    if (cachedData) {
      setImageData(cachedData);
    } else {
      getHeaderImageData();
    }
    /**
     * Clean up code
     */
    const abortController = new AbortController();
    return () => abortController.abort();
  }, []);

  return (
    <div className="w-full relative overflow-x-hidden overflow-y-hidden">
      <img
        className="lgb:h-96 object-cover w-full min-w-full"
        src={imageData?.headerImage}
      />
      <img
        style={{ height: '-webkit-fill-available' }}
        className="xlb:hidden object-cover absolute text-5xl text-white top-0 right-0"
        src={imageData?.headerIcon}
      />
      <img
        style={{
          width: '-webkit-fill-available',
        }}
        className="xsm:hidden object-cover absolute text-5xl text-white top-0 right-0"
        src={imageData?.mobileHeaderIcon}
      />
      <div className="w-full lg:hidden text-3xl text-[#ffffff] absolute top-1/2 bottom-1/2 text-center">
        Take the leap with us
      </div>
    </div>
  );
};

export default React.memo(HeaderImage);
