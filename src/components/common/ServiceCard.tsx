import { memo } from 'react';
import { useInView } from '../../hooks/useInView';
import { Card } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: string;
  id: number;
}

const ServiceCard = memo(({ icon, id }: ServiceCardProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>(0.1);
  const { t } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'server':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="10" width="32" height="8" rx="4" fill="#4f7cff" fillOpacity="0.8" />
            <rect x="8" y="20" width="32" height="8" rx="4" fill="#38bdf8" fillOpacity="0.8" />
            <rect x="8" y="30" width="32" height="8" rx="4" fill="#4f7cff" fillOpacity="0.8" />
            <circle cx="16" cy="14" r="2" fill="#fff" />
            <circle cx="16" cy="24" r="2" fill="#fff" />
            <circle cx="16" cy="34" r="2" fill="#fff" />
            <rect x="28" y="13" width="10" height="2" rx="1" fill="#fff" fillOpacity="0.7" />
            <rect x="28" y="23" width="10" height="2" rx="1" fill="#fff" fillOpacity="0.7" />
            <rect x="28" y="33" width="10" height="2" rx="1" fill="#fff" fillOpacity="0.7" />
          </svg>
        );
      case 'code':
        return (
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="10,18 24,12 38,18" stroke="#4f7cff" strokeWidth="3" fill="none" strokeLinejoin="round" />
            <polyline points="10,24 24,18 38,24" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinejoin="round" />
            <polyline points="10,30 24,24 38,30" stroke="#4f7cff" strokeWidth="3" fill="none" strokeLinejoin="round" />
          </svg>
        );
      case 'database':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="6" rx="9" ry="4" fill="#4f7cff" fillOpacity="0.8" />
            <ellipse cx="12" cy="6" rx="9" ry="4" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
            <rect x="3" y="6" width="18" height="10" rx="9" fill="#4f7cff" fillOpacity="0.7" />
            <ellipse cx="12" cy="16" rx="9" ry="4" fill="#4f7cff" fillOpacity="0.8" />
            <ellipse cx="12" cy="16" rx="9" ry="4" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Card ref={ref} className={`service-card h-100${isInView ? ' in-view' : ''}`}>
      <Card.Body className="text-center">
        <div className="service-icon mb-3">
          {getServiceIcon(icon)}
        </div>
        <Card.Title className="service-title">
          {t(`services.${icon}.title`)}
        </Card.Title>
        <Card.Text className="service-description">
          {t(`services.${icon}.description`)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
