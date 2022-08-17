import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  theme?: 'primary' | 'secondary';
  /**
   * Button contents
   */
  label: String;
  /**
   * Optional styling
   */
  className?: string;
  /**
   * Optional font family
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
  theme = 'primary',
  fontFamily = 'Poppins',
  label,
  className = '',
  ...props
}: ButtonProps) => {
  const mode =
    theme === 'primary'
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';
  const font =
    fontFamily === 'Poppins'
      ? 'storybook-button--Poppins'
      : 'storybook-button--monospace';
  return (
    <button
      type="button"
      className={['storybook-button', className, mode, font].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
