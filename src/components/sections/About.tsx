import { Container, Row, Col } from 'react-bootstrap';
import { technologies } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import TechCard from '../common/TechCard';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">{t('about.title')}</h2>
          </Col>
        <p className="section-subtitle">{t('about.subtitle')}</p>

        </Row>
        <Row>
          <Col lg={12} className="mb-5">
            <p className="about-description">
              {t('about.description')}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="mb-4">
            <h3 className="technologies-title">{t('about.technologies.title')}</h3>
            <p className="technologies-description">
              {t('about.technologies.description')}
            </p>
          </Col>
        </Row>
        <Row>
          {technologies.map((tech, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
              <TechCard name={tech.name} icon={tech.icon} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;

