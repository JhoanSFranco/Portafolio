import { memo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../constants';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = memo(({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();
  const { handleNavClick } = useSmoothScroll();

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    handleNavClick(e, targetId);
    onClose();
  };

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
                onClick={(e) => handleItemClick(e as any, item.id)}
                className="mobile-menu-link"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;

