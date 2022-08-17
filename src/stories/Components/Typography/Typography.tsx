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
  label: string;
  /**
   * Optional click handler
   */
  fontFamily?: 'poppins' | 'monospace';
  /**
   * Optional styling
   */
  className?: string;
}

export const Typography = ({
  label,
  fontFamily = 'poppins',
  type,
  className = '',
}: TypographyProps) => {
  /**
   * Calculate the typography
   */
  const calculateMode = (typography: string) => {
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

  /**
   * Calculate the font family
   */
  const font =
    fontFamily === 'poppins'
      ? 'storybook-typography--Poppins'
      : 'storybook-typography--monospace';
  return <div className={[className, mode, font].join(' ')}>{label}</div>;
};
