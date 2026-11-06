import { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../constants';
import './MobileMenu.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = memo(({ isOpen, onClose }: MobileMenuProps) => {
  const { t, language, toggleLanguage } = useLanguage();
  const { handleNavClick } = useSmoothScroll();

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  

  const onItemClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();

    // Close first: while open, body has `menu-open` which blocks scrolling
    onClose();

    if (isHome) {
      // Wait for the body scroll lock to be removed before scrolling
      setTimeout(() => handleNavClick(e as any, id), 50);
    } else {
      navigate(`/#${id}`);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Menu */}
      <nav
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-header">
          <button
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            {/* Icon close X */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        {/* Lateral Menu items */}
        <ul className="mobile-menu-list">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.id} className="mobile-menu-item">
              <a
                href={`#${item.id}`}
                onClick={(e) => onItemClick(e as any, item.id)}
                className="mobile-menu-link"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
          <li className="mobile-menu-item">
            <button
              onClick={() => { toggleLanguage(); onClose(); }}
              className="mobile-menu-link language-toggle-btn"
              aria-label="Toggle language"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;

