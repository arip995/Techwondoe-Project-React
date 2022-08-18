import React, { useEffect } from 'react';
import { fetchFooterData } from '../Services/api.service';
import { sanitizeFooterData } from '../Services/sanitizer.service';
import { FooterData } from '../Model/Footer.type';
import { Typography } from '../stories/Components/Typography/Typography';

export const Footer = () => {
  const [footerData, setFooterData] = React.useState<FooterData>();
  const getFooterData = () => {
    fetchFooterData().then((data: any) => {
      const sanitizedData: FooterData = sanitizeFooterData(
        data?.items[0]?.fields
      );
      setFooterData(sanitizedData);
      console.log(sanitizedData);
      console.log(footerData);
    });
  };

  useEffect(() => {
    getFooterData();
  }, []);
  return (
    <div className="w-full">
      <div className="md:flex md:flex-row-reverse	bg-[#E5E5E5] mdb:px-4 w-full md:py-24 py-12">
        <div className="flex flex-wrap lgb:justify-around justify-center items-center md:w-2/3 w-full gap-12">
          {footerData?.lines.map((element: any, index: number) => {
            return (
              <div key={element.id} className="">
                {footerData?.lines[index].value.map((line: any) => {
                  return (
                    <div key={line.id} className="">
                      <Typography className="" label={line.value} type="p2" />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="md:w-1/3 w-full flex md:justify-center md:items-end mdb:justify-end mdb:mt-8">
          <div className="flex gap-5">
            {footerData?.socialMediaIcons.map((icon: any) => {
              return <img key={icon.id} src={icon.value} className="" />;
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#EDEDED] py-4 flex justify-center">
        <Typography label={footerData?.copyrightText!} type="p2" />
      </div>
    </div>
  );
};
