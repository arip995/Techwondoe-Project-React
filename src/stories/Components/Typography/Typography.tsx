import React from 'react';
import './typography.css';
interface TypographyProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: 'h1' | 'h2' | 'p1' | 'p2';
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
    } else if (typography === 'p1') {
      return 'storybook-typography--p1';
    } else {
      return 'storybook-typography--p2';
    }
  };
  const mode = calculateMode(type);
  const font =
    fontFamily === 'Poppins'
      ? 'storybook-typography--Poppins'
      : 'storybook-typography--monospace';
  return <div className={[mode, font].join(' ')}>{label}</div>;
};