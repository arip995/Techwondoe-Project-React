import React from 'react';
import './typography.css';
interface TypographyProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: 'h1' | 'h2' | 'paragraph';
  /**
   * paragraph contents
   */
  label: String;
  /**
   * Optional click handler
   */
  fontFamily?: 'Poppins' | 'monospace';
}

export const Typography = ({
  label,
  fontFamily = 'Poppins',
  type,
}: TypographyProps) => {
  const calculateMode = (typography: String) => {
    if (typography === 'h1') {
      return 'storybook-typography--h1';
    } else if (typography === 'h2') {
      return 'storybook-typography--h2';
    } else {
      return 'storybook-typography--paragraph';
    }
  };
  const mode = calculateMode(type);
  const font =
    fontFamily === 'Poppins'
      ? 'storybook-typography--Poppins'
      : 'storybook-typography--monospace';
  return <div className={[mode, font].join(' ')}>{label}</div>;
};
