import './button.css';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  size = 'sm',
  label = 'Button',
  onClick,
  ...props
}: ButtonProps) => {
  const mode = color === "primary" ? 'bg-primary text-white' : (color === "secondary" ? 'bg-secondary text-white' : (color === "tertiary" ? 'bg-tertiary text-white' : (color === "quaternary" ? 'bg-quaternary text-white' : (color === "quinary" ? 'bg-quinary text-secondary border border-secondary' : 'bg-senary text-secondary border border-secondary'))));
  // Template litarals are not properly rendering sometimes in storybook. Had to use above instead of below.
  // `bg-${color}`;
  return (
    <button
      type="button"
      className={['oui-button', `oui-button--${size}`, mode].join(' ')}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
