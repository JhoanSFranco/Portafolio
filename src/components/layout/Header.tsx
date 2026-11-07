import { memo, useState, useEffect } from 'react';
import { Navbar} from 'react-bootstrap';
import Container from '../common/Container';
import { useScroll } from '../../hooks/useScroll';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = memo(() => {
  const scrolled = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>

        <Navbar.Brand href="#home" className="brand-logo">
          &lt;Jhoan Franco/&gt;
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsMobileMenuOpen(true)}
          className="mobile-menu-toggle"
        />
        
        <Navbar.Collapse id="basic-navbar-nav" className="desktop-nav">
          <div className="d-flex align-items-center">
            <Navigation />
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Container>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </Navbar>
  );
});

Header.displayName = 'Header';

export default Header;
