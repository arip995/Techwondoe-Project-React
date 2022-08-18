import React from 'react';
import './whyUs.css';
import Typography from '../Typography/Typography';

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

export const WhyUs = ({
  headinglabel,
  headingType,
  paragraphLabel,
  paragraphType,
  iconUrl,
}: WhyChooseUsProps) => {
  return (
    <div className="wrapper">
      <img src={iconUrl} className="image" />
      <div className="content">
        <Typography className="child" type={headingType} label={headinglabel} />
        <Typography
          className="child"
          type={paragraphType}
          label={paragraphLabel}
        />
      </div>
    </div>
  );
};
