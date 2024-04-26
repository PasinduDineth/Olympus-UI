import './Card.css';

interface CardProps {
  primary?: boolean;
  customContentEnabled?: boolean;
  backgroundColor?: string;
  content?: string;
  title?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  primary = false,
  customContentEnabled = false,
  content = 'This is a sample of a Card component. You can pass a string as a property to change this. Please change type or any other property to get a new look and feel or activate any other features such as buttons.',
  title = 'Card Title',
  backgroundColor,
  ...props
}: CardProps) => {
  const mode = primary ? 'bg-gray-light' : 'bg-quinary';
  return (
    <div
      className={['rounded-lg', 'p-4', 'm-2', 'flex', 'flex-col', mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {customContentEnabled ? <p>custom body</p> :
        <>
          <p className='font-bold text-normal font-sans text-quaternary'>{title}</p>
          <p className='mt-2 text-xs font-sans text-quaternary text-justify'>{content}</p>
        </>
      }      
    </div>
  );
};
