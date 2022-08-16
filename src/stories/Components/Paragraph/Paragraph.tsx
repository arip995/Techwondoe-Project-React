import React from 'react';
import './paragraph.css';
interface ParagraphProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary';
  /**
   * paragraph contents
   */
  label: string;
  /**
   * Optional click handler
   */
  fontFamily?: 'Poppins' | 'monospace';
}

export const Paragraph = ({
  label,
  fontFamily = 'Poppins',
  type = 'primary',
}: ParagraphProps) => {
  const mode =
    type === 'primary'
      ? 'storybook-paragraph--primary'
      : 'storybook-paragraph--secondary';
  const font =
    fontFamily === 'Poppins'
      ? 'storybook-paragraph--Poppins'
      : 'storybook-paragraph--monospace';
  return (
    <div className={['storybook-paragraph', mode, font].join(' ')}>{label}</div>
  );
};
