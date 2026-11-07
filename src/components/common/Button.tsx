import { memo } from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import './Button.css';

// BootstrapButton is polymorphic (`as` prop); narrowing it avoids TS2590
const BsButton = BootstrapButton as React.ComponentType<ButtonProps>;

interface CustomButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
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
    <BsButton
      {...props}
      variant={variant}
      size={size}
      className={`custom-button ${className}`}
    >
      {children}
    </BsButton>
  );
});

Button.displayName = 'Button';

export default Button;

