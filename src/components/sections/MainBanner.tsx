import { memo, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { personalInfo } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { openInNewTab } from '../../utils/helpers';
import { getFirstName } from '../../utils/helpers';
import SocialIcons from '../common/SocialIcons';
import Button from '../common/Button';
import TypeWriter from '../common/TypeWriter';
import './MainBanner.css';

const MainBanner = memo(() => {
  const { t } = useLanguage();

  const handleResumeClick = useCallback(() => {
    openInNewTab(personalInfo.resume);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="clouds"></div>
      </div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <TypeWriter 
              text={t('hero.greeting')}
              highlightText={getFirstName(personalInfo.name)}
              speed={30}
              delay={50}
            />
            <p className="hero-subtitle">{t('hero.title')}</p>
            
            <p className="hero-description">{t('hero.description')}</p>
            
            <SocialIcons />

            <Button
              variant="primary"
              size="lg"
              className="resume-btn mt-4"
              onClick={handleResumeClick}
            >
              {t('hero.resume')}
            </Button>
          </Col>
          <Col lg={6} className="hero-illustration">
            <div className="illustration-container">
              <img
                // src="public\assets\images\Fondo_minimalista_sin_Fondo.png"
                src="public\assets\images\imagen_jhoan_sin_fondo.png"
                alt="Hero Illustration"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

MainBanner.displayName = 'MainBanner';

export default MainBanner;

