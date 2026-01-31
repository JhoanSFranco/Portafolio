import { memo } from 'react';
import { Nav } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../constants';
import './Navigation.css';

const Navigation = memo(() => {
  const { t } = useLanguage();
  const { handleNavClick } = useSmoothScroll();

  return (
    <Nav className="ms-a">
      {NAVIGATION_ITEMS.map((item) => (
        <Nav.Link
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => handleNavClick(e as any, item.id)}
          className="nav-link"
        >
          {t(item.key)}
        </Nav.Link>
      ))}
    </Nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;

