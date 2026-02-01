import { Container, Row, Col } from 'react-bootstrap';
import { services } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import ServiceCard from '../common/ServiceCard';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();
  // Eliminado useInView aquí, ahora cada ServiceCard maneja su propio hook

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
              <ServiceCard icon={service.icon} id={service.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

