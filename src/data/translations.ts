import { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Software Engineer',
    'hero.description': 'Soy un Desarrollador Fullstack (énfasis Backend), especializado en el diseño y desarrollo de APIs REST con Python (FastAPI, Django REST Framework), bases de datos SQL y NoSQL y arquitectura de microservicios.',
    'hero.resume': 'Ver CV',
    
    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Un poco sobre mí',
    'about.description': 'Soy estudiante de Ingeniería de Sistemas y Computación en la Universidad Nacional de Colombia, con experiencia como Desarrollador Fullstack (énfasis Backend) en startup. Especializado en el diseño y desarrollo de APIs REST con Python (FastAPI, Flask, Django REST Framework), bases de datos SQL y NoSQL y arquitectura de microservicios. Experiencia en despliegue en Google Cloud Platform, uso de Docker e integración frontend con React. Interés en backend, sistemas distribuidos y arquitectura de software.',
    'about.technologies.title': 'Tecnologías y Herramientas',
    'about.technologies.description': 'Utilizando una combinación de tecnologías de vanguardia y software open-source confiable, construyo aplicaciones y sitios web enfocados en el usuario, con alto rendimiento para smartphones, tablets y escritorio.',
    
// Services
  'services.title': 'Servicios',
  'services.subtitle': 'Áreas de experiencia',

  'services.server.title': 'Desarrollo Backend',
  'services.server.description':
  'Desarrollo de soluciones backend y APIs REST, con énfasis en Python, implementación de lógica de negocio, integración con bases de datos relacionales y NoSQL, y despliegue de aplicaciones en entornos cloud.',

  'services.code.title': 'Desarrollo Fullstack',
  'services.code.description':
  'Desarrollo de aplicaciones web, integrando backend y frontend, consumo de APIs REST y construcción de flujos funcionales para sistemas web y MVPs.',

  'services.database.title': 'Bases de Datos e Integración de Sistemas',
  'services.database.description':
  'Diseño y gestión de modelos de datos, integración entre servicios, migración de información y automatización de procesos de procesamiento de datos.',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Lo que he construido',
    'projects.readMore': 'Leer más →',
    'projects.showMore': 'Mostrar Más →',
    'projects.showLess': 'Mostrar Menos',
    'projects.nodi.title': 'Sistema de Reclutamiento - Nodi',
      'projects.nodi.description': 'Desarrollo de APIs REST escalables con Python y FastAPI para un sistema de reclutamiento. Trabajo con bases de datos PostgreSQL, MongoDB, MySQL y Cassandra. Implementación de lógica de negocio, procesos ETL, migración de bases de datos e integración de servicios de IA. También se desarrollaron e integraron funcionalidades en React para una experiencia de usuario fluida.',
    'projects.leroi.title': 'Proyecto Leroi',
      'projects.leroi.description': 'Diseño e implementación de microservicios REST para un sistema de rutas de aprendizaje, aplicando principios de arquitectura de software. Integración con frontend web y despliegue en Google Cloud Platform (GCP), con uso de APIs de IA.',
    'projects.sga.title': 'Sistema de Gestión Académica (SGA)',
      'projects.sga.description': 'Desarrollo de un MVP de sistema de gestión académica para el Colegio Josué Manrique, aplicando la arquitectura SOFEA. Backend con Python y FastAPI, PostgreSQL y MongoDB, APIs REST y despliegue con Docker; frontend desarrollado e integrado con React y Bootstrap.',
    'projects.iot.title': 'Proyectos IoT',
    'projects.iot.description': 'Desarrollo de soluciones IoT con Python, C++ y Arduino, integrando sensores, actuadores y sistemas embebidos para aplicaciones prácticas.',
    'projects.zenun.title': 'Proyecto Zenun',
      'projects.zenun.description': 'Desarrollo de un prototipo para la gestión de préstamos estudiantiles y eventos. Desarrollado con Django REST Framework, APIs REST y lógica de negocio integrada con frontend. Se implementaron buenas prácticas de ingeniería de software, metodologías ágiles como Scrum y control de versiones.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Conéctate conmigo',
    'contact.intro': 'Si quieres saber más sobre mí o mi trabajo, o si solo quieres saludar, envíame un mensaje. Me encantaría saber de ti.',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Ingresa tu nombre',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Ingresa tu email',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Ingresa tu mensaje',
    'contact.sendDirect': 'Enviar email directamente',
    'contact.submit': 'Enviar',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado exitosamente!',
    'contact.successMessage': '¡Gracias por tu mensaje! Te responderé pronto. Se ha enviado una copia de tu mensaje a tu correo electrónico. Si no lo recibes, por favor verifica tu dirección de email e inténtalo de nuevo.',
    'contact.error': 'Error',
    'contact.errorMessage': 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.',
    'contact.validationError': 'Oops...',
    'contact.validationMessage': 'Por favor completa todos los campos correctamente',
    'contact.autoresponseError': 'El mensaje fue enviado pero no se pudo enviar la confirmación automática.',
    'contact.emailLabel': 'Email',
    'contact.addressLabel': 'Dirección',
    'contact.phoneLabel': 'Teléfono',
    'contact.socialLabel': 'Social',
    
    // Footer
    'footer.text': 'Hecho con',
    'footer.by': 'por Jhoan Sebastián Franco',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I am',
    'hero.title': 'Software Engineer',
    'hero.description': 'I am a Fullstack Developer (Backend focus), specialized in designing and developing REST APIs with Python (FastAPI, Django REST Framework), SQL and NoSQL databases, and microservices architecture.',
    'hero.resume': 'View Resume',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'A bit about me',
    'about.description': 'I am a Systems and Computing Engineering student at Universidad Nacional de Colombia with experience as a Fullstack Developer (Backend focus) at a startup. Specialized in designing and developing REST APIs with Python (FastAPI, Flask, Django REST Framework), SQL and NoSQL databases, and microservices architecture. Experience in deployment on Google Cloud Platform, Docker usage, and frontend integration with React. Interest in backend, distributed systems, and software architecture.',
    'about.technologies.title': 'Technologies and Tools',
    'about.technologies.description': 'Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, high-performance applications and websites for smartphones, tablets, and desktops.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Areas of expertise',

    'services.server.title': 'Backend Development',
    'services.server.description':
      'Development of backend solutions and REST APIs, with a focus on Python, business logic implementation, integration with relational and NoSQL databases, and deployment of applications in cloud environments.',

    'services.code.title': 'Fullstack Development',
    'services.code.description':
      'Development of web applications, integrating backend and frontend, consumption of REST APIs, and building functional flows for web systems and MVPs.',

    'services.database.title': 'Databases & Systems Integration',
    'services.database.description':
      'Design and management of data models, integration between services, data migration, and automation of data processing workflows.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'What I Built',
    'projects.readMore': 'Read more →',
    'projects.showMore': 'Show More →',
    'projects.showLess': 'Show Less',
    'projects.nodi.title': 'Recruitment System - Nodi',
      'projects.nodi.description': 'Development of scalable REST APIs with Python and FastAPI for a recruitment system. Working with PostgreSQL, MongoDB, MySQL, and Cassandra databases. Implementation of business logic, ETL processes, database migration, and integration of AI services. Also developed and integrated frontend features using React for seamless user experience.',
    'projects.leroi.title': 'Leroi Project',
      'projects.leroi.description': 'Design and implementation of REST microservices for a learning paths system, applying software architecture principles. Integration with web frontend and deployment on Google Cloud Platform (GCP), with AI API usage.',
    'projects.sga.title': 'Academic Management System (SGA)',
      'projects.sga.description': 'Development of an MVP academic management system for Colegio Josué Manrique, applying SOFEA architecture. Backend with Python and FastAPI, PostgreSQL and MongoDB, REST APIs and Docker deployment; frontend developed and integrated with React and Bootstrap.',
    'projects.iot.title': 'IoT Projects',
    'projects.iot.description': 'Development of IoT solutions with Python, C++, and Arduino, integrating sensors, actuators, and embedded systems for practical applications.',
    'projects.zenun.title': 'Zenun Project',
      'projects.zenun.description': 'Development of a prototype for managing student loans and events. Developed with Django REST Framework, REST APIs, and business logic integrated with frontend. Implemented software engineering best practices, agile methodologies like Scrum, and version control.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Connect with me',
    'contact.intro': 'If you want to know more about me or my work, or if you would just like to say hello, send me a message. I\'d love to hear from you.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Enter your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Enter your message',
    'contact.sendDirect': 'Send me email directly',
    'contact.submit': 'Submit',
    'contact.sending': 'Sending...',
    'contact.success': 'Message Sent!',
    'contact.successMessage': 'Thank you for your message! I will get back to you soon. A copy of your message has been sent to your email. If you do not receive it, please check your email address and try again.',
    'contact.error': 'Error',
    'contact.errorMessage': 'There was an error sending your message. Please try again later.',
    'contact.validationError': 'Oops...',
    'contact.validationMessage': 'Please fill all fields correctly',
    'contact.autoresponseError': 'Message was sent but automatic confirmation could not be delivered.',
    'contact.emailLabel': 'Email',
    'contact.addressLabel': 'Address',
    'contact.phoneLabel': 'Phone',
    'contact.socialLabel': 'Social',
    
    // Footer
    'footer.text': 'Made with',
    'footer.by': 'by Jhoan Sebastián Franco',
  },
};

