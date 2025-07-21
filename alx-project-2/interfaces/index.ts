// Interface for Card component props
export interface CardProps {
  title: string;
  content: string;
}

// Interface for Button component props
export interface ButtonProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Interface for Post data
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Interface for User data
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Interface for PostModal props
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}
