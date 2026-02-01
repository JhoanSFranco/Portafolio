import { useState, useCallback, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useLanguage } from '../context/LanguageContext';
import { validateContactForm, ContactFormData } from '../utils/validators';


// EmailJS Configuration desde variables de entorno
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_TEMPLATE_AUTORESPONSE = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTORESPONSE;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Validación de variables de entorno
if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_TEMPLATE_AUTORESPONSE || !EMAILJS_PUBLIC_KEY) {
  throw new Error('Faltan variables de entorno de EmailJS. Verifica tu archivo .env');
}

/**
 * Custom hook to manage contact form
 */
export const useContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validation = validateContactForm(formData);
      if (!validation.isValid) {
        // Mostrar error de validación con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: t('contact.validationError'),
          text: validation.error || t('contact.validationMessage'),
          confirmButtonColor: '#3498db',
        });
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        // Enviar email usando EmailJS (para ti)
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Jhoan Sebastián Franco',
          },
          EMAILJS_PUBLIC_KEY
        );

        // Intentar enviar auto-respuesta al remitente
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_AUTORESPONSE,
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: formData.email,
            },
            EMAILJS_PUBLIC_KEY
          );
          
          // Todo exitoso
          await Swal.fire({
            icon: 'success',
            title: t('contact.success'),
            text: t('contact.successMessage'),
            confirmButtonColor: '#27ae60',
            timer: 10000,
          });
        } catch (autoResponseError) {
          // Mensaje enviado pero auto-respuesta falló
          console.warn('Auto-response failed:', autoResponseError);
          
          await Swal.fire({
            icon: 'warning',
            title: t('contact.success'),
            text: t('contact.autoresponseError'),
            confirmButtonColor: '#f39c12',
          });
        }

        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Error sending email:', error);
        
        // Mostrar error con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: t('contact.error'),
          text: t('contact.errorMessage'),
          confirmButtonColor: '#e74c3c',
        });
        
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, t]
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
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

