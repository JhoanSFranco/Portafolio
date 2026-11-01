import { Container as BootstrapContainer, ContainerProps } from 'react-bootstrap';
import './Container.css';

interface CustomContainerProps extends Omit<ContainerProps, 'fluid'> {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const Container = ({ 
  fluid = false,
  children, 
  className = '',
  ...props 
}: CustomContainerProps) => {
  return (
    <BootstrapContainer
    {...(props as any)}      
    fluid={fluid}
    className={`custom-container ${className}`}
    >
      {children}
    </BootstrapContainer>
  );
};

export default Container;

