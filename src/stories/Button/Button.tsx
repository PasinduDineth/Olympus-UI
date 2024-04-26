import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'small',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'text-white bg-primary' : 'text-white bg-tertiary';
  return (
    <button
      type="button"
      className={['oui-button', `oui-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
