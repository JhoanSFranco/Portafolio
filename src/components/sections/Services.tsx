import { Container, Row, Col, Card } from 'react-bootstrap';
import { services } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'server':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/>
          </svg>
        );
      case 'code':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H2v2h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2h2v-2h-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2H8z"/>
          </svg>
        );
      case 'architecture':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="services" className="services-section section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </Col>
        </Row>
        <Row>
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    {getServiceIcon(service.icon)}
                  </div>
                  <Card.Title className="service-title">
                    {t(`services.${service.icon}.title`)}
                  </Card.Title>
                  <Card.Text className="service-description">
                    {t(`services.${service.icon}.description`)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

