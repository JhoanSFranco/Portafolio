import { memo } from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import './Button.css';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = memo(({ 
  variant = 'primary', 
  size = 'lg',
  children, 
  className = '',
  ...props 
}: CustomButtonProps) => {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      className={`custom-button ${className}`}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
});

Button.displayName = 'Button';

export default Button;

