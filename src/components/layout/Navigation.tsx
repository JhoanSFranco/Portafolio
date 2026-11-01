import { memo } from 'react';
import { Nav } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { NAVIGATION_ITEMS } from '../../constants';
import './Navigation.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navigation = memo(() => {
  const { t } = useLanguage();
  const { handleNavClick } = useSmoothScroll();

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  

  const onItemClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();

    if (isHome) {
      handleNavClick(e as any, id);
    } else {
      navigate(`/#${id}`);
    }
  }


  return (
    <Nav className="ms-a">
      {NAVIGATION_ITEMS.map((item) => (
        <Nav.Link
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => onItemClick(e, item.id)}
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

