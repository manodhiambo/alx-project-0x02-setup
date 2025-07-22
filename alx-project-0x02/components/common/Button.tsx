import { ButtonProps } from '../../interfaces';

const Button = ({ 
  children, 
  onClick, 
  size = 'medium', 
  shape = 'rounded-md', 
  className = '' 
}: ButtonProps) => {
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
