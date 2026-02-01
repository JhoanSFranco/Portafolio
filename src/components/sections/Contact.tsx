import { memo } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { personalInfo } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { useContactForm } from '../../hooks/useContactForm';
import SocialIcons from '../common/SocialIcons';
import Button from '../common/Button';
import './Contact.css';

const Contact = memo(() => {
  const { t } = useLanguage();
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus } = useContactForm();

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">{t('contact.title')}</h2>
            <p className="section-subtitle">{t('contact.subtitle')}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="text-center mb-4">
            <p className="contact-intro">
              {t('contact.intro')}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="mb-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>{t('contact.name')}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder={t('contact.namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('contact.email')}</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder={t('contact.emailPlaceholder')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>{t('contact.message')}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              
              {/* Mensaje de estado */}
              {submitStatus === 'success' && (
                <div className="alert alert-success" role="alert">
                  {t('contact.success')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-danger" role="alert">
                  {t('contact.error')}
                </div>
              )}
              
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="direct-email-link"
                >
                  {t('contact.sendDirect')}
                </a>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.submit')}
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={6} className="contact-info">
            <div className="info-item mb-4">
              <h5 className="info-label">{t('contact.emailLabel')}</h5>
              <a href={`mailto:${personalInfo.email}`} className="info-value">
                {personalInfo.email}
              </a>
            </div>
            <div className="info-item mb-4">
              <h5 className="info-label">{t('contact.addressLabel')}</h5>
              <p className="info-value">{personalInfo.location}</p>
            </div>
            <div className="info-item mb-4">
              <h5 className="info-label">{t('contact.phoneLabel')}</h5>
              <a href={`tel:${personalInfo.phone}`} className="info-value">
                {personalInfo.phone}
              </a>
            </div>
            <div className="info-item">
              <h5 className="info-label">{t('contact.socialLabel')}</h5>
              <SocialIcons variant="contact" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;

