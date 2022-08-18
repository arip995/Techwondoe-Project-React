import React from 'react';
import { Typography } from '../Typography/Typography';
import './whyChooseUs.css';

interface WhyChooseUsProps {
  /**
   * Is this the principal call to action on the page?
   */
  headinglabel: string;
  /**
   * Optional font family
   */
  headingType: 'h1' | 'h2';
  /**
   * Optional font family
   */
  paragraphLabel: string;
  /**
   * Optional font family
   */
  paragraphType: 'p1' | 'p2';
  /**
   * Optional font family
   */
  iconUrl: string;
}

export const WhyChoose = ({
  headinglabel,
  headingType,
  paragraphLabel,
  paragraphType,
  iconUrl,
}: WhyChooseUsProps) => {
  return (
    <div className="flexs">
      <img src={iconUrl} className="mt-2" />
      <div className="text-left ml-2">
        <Typography className="mb-3" type={headingType} label={headinglabel} />
        <Typography
          className="mb-3"
          type={paragraphType}
          label={paragraphLabel}
        />
      </div>
    </div>
  );
};
