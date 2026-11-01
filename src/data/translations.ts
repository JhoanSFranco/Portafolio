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
     'hero.description': 'Desarrollador Software Fullstack con énfasis en Backend e Arquitecturas Distribuidas. Especializado en el diseño de APIs REST, servicios Cloud, sistemas event-driven (CDC, Apache/Flink) e integración de IA. Enfocado en construir software escalable, fiable y de alto rendimiento.',
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
    'projects.subtitle': 'Proyectos en los que he trabajado',
    'projects.readMore': 'Leer más →',
    'projects.viewDetails': 'Ver detalles',
    'projects.showMore': 'Mostrar Más →',
    'projects.showLess': 'Mostrar Menos',
    'projects.backToProjects': 'Volver a proyectos',
    'projects.detailNotFound': 'Proyecto no encontrado',
    'projects.descriptionTitle': 'Descripción',
    'projects.period': 'Periodo',
    'projects.role': 'Rol',
    'projects.team': 'Equipo',
    'projects.status': 'Estado',
    'projects.completed': 'Completado',
    'projects.inProgress': 'En curso',
    'projects.technologies': 'Tecnologías',
    'projects.responsibilities': 'Responsabilidades',
    'projects.results': 'Resultados',
    'projects.architecture': 'Arquitectura',
    'projects.skills': 'Habilidades',
    'projects.cdc.title': 'Arquitectura CDC para integración de datos',
    'projects.cdc.description': 'Sept. 2026 - en curso. POC de arquitectura CDC en tiempo real para Clever Cloud: ingesta incremental de múltiples fuentes hacia un data warehouse con Debezium, Apache Pulsar y Apache Flink. Evaluación experimental de fiabilidad, escalabilidad y latencia del pipeline.',
    'projects.orion.title': 'Yunex Traffic - Módulo de mantenimiento ORION',
    'projects.orion.description': 'Mar. - jul. 2026. Practicante full stack. Desarrollo del backend (Java, Spring Boot) y el frontend (React) de un módulo de mantenimiento integrado a ORION para el seguimiento de operaciones de campo: eventos, grupos e inventario de equipos de transporte inteligente. APIs REST y arquitectura hexagonal, con una solución pensada para comercializarse como producto.',
    'projects.nodi.title': 'Nodi - Ingeniero de software',
    'projects.nodi.description': 'Ago. 2025 - feb. 2026. Startup en Bogotá. Migración de la base de datos a PostgreSQL en GCP, diseño de buckets en Google Cloud Storage para organizar CV, PDF e imágenes, y desarrollo de servicios backend en Python con FastAPI integrando las APIs de IA de Google.',
    'projects.sga.title': 'Sistema de Gestión Académica (SGA)',
    'projects.sga.description': 'May. - jul. 2025. MVP web desarrollado en equipo de 7 para el Colegio Josué Manrique, que reemplaza un proceso en Access/Excel: preinscripción con PDF, autenticación por roles y seguimiento de notas y asistencia. Arquitectura SOFEA con microservicios, CI/CD con GitHub Actions, Docker y monitoreo con Prometheus y Grafana.',
    'projects.monitoria.title': 'Monitor de programación - Universidad Nacional de Colombia',
    'projects.monitoria.description': 'Feb. - may. y jul. - sept. 2025. Acompañamiento de más de 100 estudiantes de programación en C++ (2 h al día, 2 días por semana) en un equipo de 3 monitores: corrección de ejercicios y consolidación de los conceptos fundamentales.',
    
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
    'hero.description': 'Fullstack Software Developer focused on Backend and Distributed Architectures. Specialized in REST API design, Cloud services, event-driven systems (CDC, Apache/Flink), and AI integration. Focused on building scalable, reliable, and high-performance software.',
    'hero.resume': 'View Resume',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'A bit about me',
    'about.description': 'I am pursuing a double engineering degree at IMT Atlantique (France), following a Master’s degree program, and Universidad Nacional de Colombia. As a Software Engineer, I have professional experience building scalable applications using Java (Spring Boot), Python (FastAPI), and React. My expertise spans REST API design, microservices architectures (SOFEA, Hexagonal), using cloud platforms like Google Cloud Platform and AWS. I am deeply focused on distributed systems, application reliability, and real-time data engineering in CDC architectures.',
    'about.technologies.title': 'Technologies and Tools',
    'about.technologies.description': 'Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, high-performance applications and websites for smartphones, tablets, and desktops.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Areas of expertise',

    'services.server.title': 'Backend Development',
    'services.server.description': 'Development of robust backend solutions and REST APIs using Java (Spring Boot) and Python (FastAPI). Focus on implementing scalable business logic, microservices architectures, and cloud-native application deployment.',

    'services.code.title': 'Fullstack Development',
    'services.code.description':
      'End-to-end web application development from backend architecture to frontend execution. Focused on building responsive interfaces, integrating RESTful services, and delivering production-ready MVPs.',
    'services.database.title': 'Databases & Systems Integration',
    'services.database.description':
      'Design of data models, ETL/ELT pipelines, and real-time event-driven architectures. Experience with Change Data Capture (CDC), database migrations, and automating complex data processing workflows',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Projects I have worked on',
    'projects.readMore': 'Read more →',
    'projects.viewDetails': 'View Details',
    'projects.showMore': 'Show More →',
    'projects.showLess': 'Show Less',
    'projects.backToProjects': 'Back to projects',
    'projects.detailNotFound': 'Project not found',
    'projects.descriptionTitle': 'Description',
    'projects.period': 'Period',
    'projects.role': 'Role',
    'projects.team': 'Team',
    'projects.status': 'Status',
    'projects.completed': 'Completed',
    'projects.inProgress': 'In progress',
    'projects.technologies': 'Technologies',
    'projects.responsibilities': 'Responsibilities',
    'projects.results': 'Results',
    'projects.architecture': 'Architecture',
    'projects.skills': 'Skills',
    'projects.cdc.title': 'CDC Architecture for Data Integration',
    'projects.cdc.description': 'Sept. 2026 - ongoing. Real-time CDC architecture proof of concept for Clever Cloud: incremental ingestion from multiple sources into a data warehouse using Debezium, Apache Pulsar, and Apache Flink. Experimental evaluation of pipeline reliability, scalability, and latency.',
    'projects.orion.title': 'Yunex Traffic - ORION Maintenance Module',
    'projects.orion.description': 'Mar. - Jul. 2026. Full-stack intern. Development of the backend (Java, Spring Boot) and frontend (React) for a maintenance module integrated into ORION to track field operations: events, groups, and intelligent transportation equipment inventory. REST APIs and hexagonal architecture, with a solution designed for product commercialization.',
    'projects.nodi.title': 'Nodi - Software Engineer',
    'projects.nodi.description': 'Aug. 2025 - Feb. 2026. Startup in Bogotá. Database migration to PostgreSQL on GCP, Google Cloud Storage bucket design for CVs, PDFs, and images, and backend service development in Python with FastAPI integrating Google AI APIs.',
    'projects.sga.title': 'Academic Management System (SGA)',
    'projects.sga.description': 'May - Jul. 2025. Web MVP developed by a team of 7 for Colegio Josué Manrique, replacing an Access/Excel process: PDF pre-registration, role-based authentication, and grade and attendance tracking. SOFEA architecture with microservices, CI/CD with GitHub Actions, Docker, and monitoring with Prometheus and Grafana.',
    'projects.monitoria.title': 'Programming Teaching Assistant - Universidad Nacional de Colombia',
    'projects.monitoria.description': 'Feb. - May and Jul. - Sept. 2025. Supported more than 100 C++ programming students (2 hours per day, 2 days per week) as part of a team of 3 teaching assistants by reviewing exercises and reinforcing fundamental concepts.',
    
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
