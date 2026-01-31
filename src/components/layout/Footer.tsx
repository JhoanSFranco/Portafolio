import { Container } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-content text-center">
          <p className="footer-text">
            {t('footer.text')} <span className="heart">❤️</span> {t('footer.by')}
          </p>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;

