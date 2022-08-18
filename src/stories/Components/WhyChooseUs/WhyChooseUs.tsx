import React from 'react';
import { Typography } from '../Typography/Typography';
import './whyChooseUs.css';

interface WhyChooseUsProps {
  /**
   * Heading text
   */
  headinglabel: string;
  /**
   * Heading type
   */
  headingType: 'h1' | 'h2';
  /**
   * Paragraph label
   */
  paragraphLabel: string;
  /**
   * Paragraph type
   */
  paragraphType: 'p1' | 'p2';
  /**
   * Icon url
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
