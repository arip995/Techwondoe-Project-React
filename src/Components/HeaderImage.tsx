import React, { useEffect, useState } from 'react';
import { fetchHeaderImageData } from '../Services/api.service';
import { sanitizeHeaderImageData } from '../Services/sanitizer.service';
import { HeaderImageData } from '../Model/HeaderImage.type';
export const HeaderImage = () => {
  const [imageData, setImageData] = useState<HeaderImageData>();

  /**
   * Function to fetch and sanitize the header image data
   */
  const getHeaderImageData = () => {
    fetchHeaderImageData()
      .then((data) => {
        const sanitizedData: HeaderImageData = sanitizeHeaderImageData(
          data?.items[0]?.fields
        );
        setImageData(sanitizedData);
        console.log(sanitizedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Useeffect hook calls once in the begining
   */
  useEffect(() => {
    getHeaderImageData();
  }, []);

  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <img
        className="object-contain w-full min-w-full"
        src={imageData?.headerImage}
      />
    </div>
  );
};
