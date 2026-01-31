// Navigation constants
export const NAVIGATION_ITEMS = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const;

// Scroll threshold
export const SCROLL_THRESHOLD = 50;

// Projects display limit
export const PROJECTS_INITIAL_LIMIT = 3;

// Form validation
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_NAME_LENGTH = 2;
export const MIN_MESSAGE_LENGTH = 10;

// Contact form subjects
export const CONTACT_SUBJECTS = {
  es: 'Contacto desde portafolio',
  en: 'Contact from portfolio',
} as const;

