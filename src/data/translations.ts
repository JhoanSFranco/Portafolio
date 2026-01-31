import { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.title': 'Software Engineer',
    'hero.description': 'Soy un Desarrollador Fullstack (énfasis Backend). Actualmente trabajo en Nodi como Desarrollador de Software, especializado en el diseño y desarrollo de APIs REST con Python (FastAPI, Django REST Framework), bases de datos SQL y NoSQL y arquitectura de microservicios.',
    'hero.resume': 'Ver CV',
    
    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Un poco sobre mí',
    'about.description': 'Soy un estudiante de Ingeniería de Sistemas y Computación con experiencia como Desarrollador Fullstack (énfasis Backend) en startup. Especializado en el diseño y desarrollo de APIs REST con Python (FastAPI, Django REST Framework), bases de datos SQL y NoSQL y arquitectura de microservicios. Experiencia en despliegue en Google Cloud Platform, uso de Docker e integración frontend con React. Interés en backend, sistemas distribuidos y arquitectura de software.',
    'about.technologies.title': 'Tecnologías y Herramientas',
    'about.technologies.description': 'Utilizando una combinación de tecnologías de vanguardia y software open-source confiable, construyo aplicaciones y sitios web enfocados en el usuario, con alto rendimiento para smartphones, tablets y escritorio.',
    
    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Lo que ofrezco',
    'services.backend.title': 'Desarrollo Backend',
    'services.backend.description': 'Diseño y desarrollo de APIs REST escalables con Python (FastAPI, Django), arquitectura de microservicios, integración con bases de datos SQL y NoSQL, y despliegue en la nube con GCP.',
    'services.fullstack.title': 'Desarrollo Fullstack',
    'services.fullstack.description': 'Desarrollo de aplicaciones web completas desde el backend hasta el frontend, integrando React con APIs REST, implementando lógica de negocio y procesos ETL.',
    'services.architecture.title': 'Arquitectura de Software',
    'services.architecture.description': 'Diseño de arquitecturas escalables y mantenibles, aplicación de principios SOLID, patrones de diseño y mejores prácticas en el desarrollo de software.',
    
    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Lo que he construido',
    'projects.readMore': 'Leer más →',
    'projects.showMore': 'Mostrar Más →',
    'projects.showLess': 'Mostrar Menos',
    'projects.nodi.title': 'Sistema de Reclutamiento - Nodi',
    'projects.nodi.description': 'Desarrollo de APIs REST escalables con Python y FastAPI para un sistema de reclutamiento. Trabajo con bases de datos PostgreSQL, MongoDB, MySQL y Cassandra. Implementación de lógica de negocio, procesos ETL y migración de bases de datos.',
    'projects.leroi.title': 'Proyecto Leroi',
    'projects.leroi.description': 'Diseño e implementación de microservicios REST para un sistema de rutas de aprendizaje. Integración con frontend web y despliegue en Google Cloud Platform (GCP), con uso de APIs de IA.',
    'projects.sga.title': 'Sistema de Gestión Académica (SGA)',
    'projects.sga.description': 'Desarrollo de un MVP de sistema de gestión académica para el Colegio Josué Manrique, aplicando la arquitectura SOFEA. Backend con Python y FastAPI, PostgreSQL y MongoDB, APIs REST y despliegue con Docker; frontend en React.',
    'projects.iot.title': 'Proyectos IoT',
    'projects.iot.description': 'Desarrollo de soluciones IoT con Python, C++ y Arduino, integrando sensores, actuadores y sistemas embebidos para aplicaciones prácticas.',
    'projects.zenun.title': 'Proyecto Zenun',
    'projects.zenun.description': 'Desarrollo de un prototipo para la gestión de préstamos estudiantiles y eventos. Desarrollado con Django REST Framework, APIs REST y lógica de negocio integrada con frontend.',
    
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
    'hero.description': 'I am a Fullstack Developer (Backend focus). Currently working at Nodi as a Software Developer, specialized in designing and developing REST APIs with Python (FastAPI, Django REST Framework), SQL and NoSQL databases, and microservices architecture.',
    'hero.resume': 'View Resume',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'A bit about me',
    'about.description': 'I am a Systems and Computing Engineering student with experience as a Fullstack Developer (Backend focus) at a startup. Specialized in designing and developing REST APIs with Python (FastAPI, Django REST Framework), SQL and NoSQL databases, and microservices architecture. Experience in deployment on Google Cloud Platform, Docker usage, and frontend integration with React. Interest in backend, distributed systems, and software architecture.',
    'about.technologies.title': 'Technologies and Tools',
    'about.technologies.description': 'Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, high-performance applications and websites for smartphones, tablets, and desktops.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'What I Provide',
    'services.backend.title': 'Backend Development',
    'services.backend.description': 'Design and development of scalable REST APIs with Python (FastAPI, Django), microservices architecture, integration with SQL and NoSQL databases, and cloud deployment with GCP.',
    'services.fullstack.title': 'Fullstack Development',
    'services.fullstack.description': 'Development of complete web applications from backend to frontend, integrating React with REST APIs, implementing business logic and ETL processes.',
    'services.architecture.title': 'Software Architecture',
    'services.architecture.description': 'Design of scalable and maintainable architectures, application of SOLID principles, design patterns, and best practices in software development.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'What I Built',
    'projects.readMore': 'Read more →',
    'projects.showMore': 'Show More →',
    'projects.showLess': 'Show Less',
    'projects.nodi.title': 'Recruitment System - Nodi',
    'projects.nodi.description': 'Development of scalable REST APIs with Python and FastAPI for a recruitment system. Working with PostgreSQL, MongoDB, MySQL, and Cassandra databases. Implementation of business logic, ETL processes, and database migration.',
    'projects.leroi.title': 'Leroi Project',
    'projects.leroi.description': 'Design and implementation of REST microservices for a learning paths system. Integration with web frontend and deployment on Google Cloud Platform (GCP), with AI API usage.',
    'projects.sga.title': 'Academic Management System (SGA)',
    'projects.sga.description': 'Development of an MVP academic management system for Colegio Josué Manrique, applying SOFEA architecture. Backend with Python and FastAPI, PostgreSQL and MongoDB, REST APIs and Docker deployment; frontend in React.',
    'projects.iot.title': 'IoT Projects',
    'projects.iot.description': 'Development of IoT solutions with Python, C++, and Arduino, integrating sensors, actuators, and embedded systems for practical applications.',
    'projects.zenun.title': 'Zenun Project',
    'projects.zenun.description': 'Development of a prototype for managing student loans and events. Developed with Django REST Framework, REST APIs, and business logic integrated with frontend.',
    
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
    'contact.emailLabel': 'Email',
    'contact.addressLabel': 'Address',
    'contact.phoneLabel': 'Phone',
    'contact.socialLabel': 'Social',
    
    // Footer
    'footer.text': 'Made with',
    'footer.by': 'by Jhoan Sebastián Franco',
  },
};

