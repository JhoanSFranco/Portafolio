import { memo } from 'react';
import { useInView } from '../../hooks/useInView';
import './TechCard.css';

interface TechCardProps {
  name: string;
  icon?: string;
  className?: string;
  index?: number;
}

const TechCard = memo(({ name, icon, className = '', index = 0 }: TechCardProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.1);
  
  return (
    <div
      ref={ref}
      className={`tech-card ${isInView ? 'in-view' : ''} ${className}`}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {icon && (
        <div className="tech-icon">
          <img src={icon} alt={`${name} icon`} />
        </div>
      )}
      <span className="tech-name">{name}</span>
    </div>
  );
});

TechCard.displayName = 'TechCard';

export default TechCard;
