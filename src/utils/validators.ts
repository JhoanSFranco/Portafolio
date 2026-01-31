import { EMAIL_REGEX, MIN_NAME_LENGTH, MIN_MESSAGE_LENGTH } from '../constants';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates an email address
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  return { isValid: true };
};

/**
 * Validates a name
 */
export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }
  if (name.trim().length < MIN_NAME_LENGTH) {
    return { isValid: false, error: `Name must be at least ${MIN_NAME_LENGTH} characters` };
  }
  return { isValid: true };
};

/**
 * Validates a message
 */
export const validateMessage = (message: string): ValidationResult => {
  if (!message.trim()) {
    return { isValid: false, error: 'Message is required' };
  }
  if (message.trim().length < MIN_MESSAGE_LENGTH) {
    return { isValid: false, error: `Message must be at least ${MIN_MESSAGE_LENGTH} characters` };
  }
  return { isValid: true };
};

/**
 * Validates contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) {
    return nameValidation;
  }

  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    return emailValidation;
  }

  const messageValidation = validateMessage(data.message);
  if (!messageValidation.isValid) {
    return messageValidation;
  }

  return { isValid: true };
};

