import './Textbox.css';

export interface TextboxProps {
  value?: string;
  onChange?: (value: string) => void;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  placeholder?: string;
  label?: string;
}

export const Textbox = ({
  value = '',
  size= 'md',
  onChange,
  color = "primary",
  placeholder="Type here",
  label="Email",
  ...props
}: TextboxProps) => {
  // const mode = color === "primary" ? 'text-primary' : (color === "secondary" ? 'text-secondary' : (color === "tertiary" ? 'text-tertiary' : (color === "quaternary" ? 'text-quaternary' : (color === "quinary" ? 'text-quinary' : 'text-senary'))));
  // Template litarals are not properly rendering sometimes in storybook when it come to Tailwindcss related to color. Such case, above will work fine.
  // `bg-${color}`;
  const mode = `text-${color}`
  const borderColor = color === "primary" ? 'border-primary' : (color === "secondary" ? 'border-secondary' : (color === "tertiary" ? 'border-tertiary' : (color === "quaternary" ? 'border-quaternary' : (color === "quinary" ? 'border-quinary' : 'border-senary'))));
  return (
    <div className='flex flex-col'>
      {label && <label className={['oui-textbox-label', `oui-textbox-label-${size}`, mode].join(' ')}>{label}</label>}
      <input
        type="text"
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={['oui-textbox', `oui-textbox-${size}`, borderColor].join(' ')}
      />
    </div>
  );
};
