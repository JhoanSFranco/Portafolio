import { Container as BootstrapContainer, ContainerProps } from 'react-bootstrap';
import './Container.css';

interface CustomContainerProps extends ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container = ({ 
  children, 
  className = '',
  fluid = false,
  ...props 
}: CustomContainerProps) => {
  return (
    <BootstrapContainer
      fluid={fluid}
      className={`custom-container ${className}`}
      {...props}
    >
      {children}
    </BootstrapContainer>
  );
};

export default Container;

