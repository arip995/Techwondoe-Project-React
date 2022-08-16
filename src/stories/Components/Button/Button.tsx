import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary';
  /**
   * Button contents
   */
  children: string;
  /**
   * Optional click handler
   */
  fontFamily?: 'Poppins' | 'monospace';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  fontFamily = 'Poppins',
  children,
  ...props
}: ButtonProps) => {
  const mode =
    type === 'primary'
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';
  const font =
    fontFamily === 'Poppins'
      ? 'storybook-button--Poppins'
      : 'storybook-button--monospace';
  return (
    <button
      type="button"
      className={['storybook-button', mode, font].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};
