import React from 'react';
import './whyUs.css';
import Typography from '../Typography/Typography';

interface WhyChooseUsProps {
  /**
   * Title text
   */
  title: string;
  /**
   * Paragraph type
   */
  paragraph: string;
  /**
   * Icon url
   */
  iconUrl: string;
}

const WhyUs = ({ title, paragraph, iconUrl }: WhyChooseUsProps) => {
  return (
    <div className="wrapper">
      <img src={iconUrl} className="image" />
      <div className="content">
        <Typography className="child" type="h2" label={title} />
        <Typography className="child" type="p2" label={paragraph} />
      </div>
    </div>
  );
};
export default React.memo(WhyUs);
