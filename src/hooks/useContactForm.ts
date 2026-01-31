import { useState, useCallback, FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/personalData';
import { CONTACT_SUBJECTS } from '../constants';
import { createMailtoLink } from '../utils/helpers';
import { validateContactForm, ContactFormData } from '../utils/validators';

/**
 * Custom hook to manage contact form
 */
export const useContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear error when user starts typing
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validation = validateContactForm(formData);
      if (!validation.isValid) {
        // Set general error or field-specific errors
        return;
      }

      const subjectText = CONTACT_SUBJECTS[language];
      const subject = `${subjectText} - ${formData.name}`;
      const mailtoLink = createMailtoLink(
        personalInfo.email,
        subject,
        formData.message
      );

      window.location.href = mailtoLink;
    },
    [formData, language]
  );

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

