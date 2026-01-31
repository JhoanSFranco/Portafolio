/**
 * Scrolls smoothly to an element by its ID
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Creates a mailto link with subject and body
 */
export const createMailtoLink = (
  email: string,
  subject: string,
  body: string
): string => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Opens a URL in a new tab
 */
export const openInNewTab = (url: string): void => {
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Gets the first name from a full name
 */
export const getFirstName = (fullName: string): string => {
  return fullName.split(' ')[0] || fullName;
};

/**
 * Formats a phone number for tel: links
 */
export const formatPhoneForTel = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

