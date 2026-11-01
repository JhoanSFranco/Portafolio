import { PersonalInfo, Project, ProjectDetail, Service, Technology, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Jhoan Sebastián Franco Ruiz',
  title: 'Software Engineer',
  description: 'Soy un Desarrollador Fullstack (énfasis Backend). Actualmente trabajo en Nodi como Desarrollador de Software, especializado en el diseño y desarrollo de APIs REST con Python (FastAPI, Django REST Framework), bases de datos SQL y NoSQL y arquitectura de microservicios.',
  location: 'Bogotá, Colombia',
  email: 'jhfrancor@unal.edu.co',
  phone: '+57 305-474-1424',
  linkedin: 'https://www.linkedin.com/in/jhoan-sebastián-franco-46954b28a/',
  github: 'https://github.com/JhoanSFranco',
  resume_spanish: '/assets/resumes/CV_JHOAN_SEBASTIAN_FRANCO_SPANISH.pdf',
  resume_english: '/assets/resumes/CV_JHOAN_SEBASTIAN_FRANCO_ENGLISH.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: personalInfo.linkedin,
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: personalInfo.github,
    icon: 'github'
  }
];

export const technologies: Technology[] = [
  { name: 'Python', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: 'JavaScript', icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
  { name: 'TypeScript', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: 'Java', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: 'C++', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: 'R', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
  { name: 'FastAPI', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: 'Flask', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: 'Django', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: 'React', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: 'HTML5', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: 'CSS3', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: 'Bootstrap', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" },
  { name: 'PostgreSQL', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: 'MySQL', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: 'MongoDB', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: 'Redis', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: 'Docker', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: 'Git', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: 'Google Cloud Platform', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: 'firebase', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"},
  { name: 'Arduino', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  { name: 'GitHub', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: 'Selenium', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },

];

export const services: Service[] = [
  {
    id: 1,
    title: 'Desarrollo Backend',
    description: 'Diseño y desarrollo de APIs REST escalables con Python (FastAPI, Django), arquitectura de microservicios, integración con bases de datos SQL y NoSQL, y despliegue en la nube con GCP.',
    icon: 'server'
  },
  {
    id: 2,
    title: 'Desarrollo Fullstack',
    description: 'Desarrollo de aplicaciones web completas desde el backend hasta el frontend, integrando React con APIs REST, implementando lógica de negocio y procesos ETL.',
    icon: 'code'
  },
  {
    id: 3,
    title: 'Bases de Datos e Integración',
    description: 'Modelado y gestión de bases de datos relacionales y NoSQL, migraciones de datos, procesos ETL e integración entre servicios y APIs externas.',
    icon: 'database'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Arquitectura CDC para integración de datos',
    icon: '/assets/images/imagen_proyecto_cdc.png',
    description: 'Sept. 2026 - en curso. POC de arquitectura CDC en tiempo real para Clever Cloud: ingesta incremental de múltiples fuentes hacia un data warehouse con Debezium, Apache Pulsar y Apache Flink. Evaluación experimental de fiabilidad, escalabilidad y latencia del pipeline.',
    technologies: ['Debezium', 'Apache Pulsar', 'Apache Flink', 'PostgreSQL', 'CDC', 'ETL/ELT', 'Data Engineering'],
    link: '#',
    translationKey: 'cdc'
  },
  {
    id: 2,
    title: 'Yunex Traffic - Módulo de mantenimiento ORION',
    icon: '/assets/images/imagen_proyecto_orion.png',
    description: 'Mar. - jul. 2026. Practicante full stack. Desarrollo del backend (Java, Spring Boot) y el frontend (React) de un módulo de mantenimiento integrado a ORION para el seguimiento de operaciones de campo: eventos, grupos e inventario de equipos de transporte inteligente. APIs REST y arquitectura hexagonal, con una solución pensada para comercializarse como producto.',
    technologies: ['Java', 'Spring Boot', 'React', 'REST', 'Arquitectura hexagonal'],
    link: '#',
    translationKey: 'orion'
  },
  {
    id: 3,
    title: 'Nodi - Ingeniero de software',
    icon: '/assets/images/imagen_proyecto_nodi.png',
    description: 'Ago. 2025 - feb. 2026. Startup en Bogotá. Migración de la base de datos a PostgreSQL en GCP, diseño de buckets en Google Cloud Storage para organizar CV, PDF e imágenes, y desarrollo de servicios backend en Python con FastAPI integrando las APIs de IA de Google.',
    technologies: ['Python', 'FastAPI', 'REST', 'PostgreSQL', 'GCP', 'Cloud Storage', 'Firebase Auth', 'AI integration'],
    link: '#',
    translationKey: 'nodi'
  },
  {
    id: 4,
    title: 'Sistema de Gestión Académica (SGA)',
    icon: '/assets/images/imagen_proyecto_sga.png',
    description: 'May. - jul. 2025. MVP web desarrollado en equipo de 7 para el Colegio Josué Manrique, que reemplaza un proceso en Access/Excel: preinscripción con PDF, autenticación por roles y seguimiento de notas y asistencia. Arquitectura SOFEA con microservicios, CI/CD con GitHub Actions, Docker y monitoreo con Prometheus y Grafana.',
    technologies: ['Python', 'FastAPI', 'REST', 'React', 'MongoDB', 'MySQL', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Selenium'],
    link: '#',
    translationKey: 'sga'
  },
  {
    id: 5,
    title: 'Monitor de programación - Universidad Nacional de Colombia',
    icon: '/assets/images/imagen_proyecto_monitoria.png',
    description: 'Feb. - may. y jul. - sept. 2025. Acompañamiento de más de 100 estudiantes de programación en C++ (2 h al día, 2 días por semana) en un equipo de 3 monitores: corrección de ejercicios y consolidación de los conceptos fundamentales.',
    technologies: ['C++', 'Enseñanza', 'Comunicación', 'Trabajo en equipo'],
    link: '#',
    translationKey: 'monitoria'
  }
];

export const projectDetails: ProjectDetail[] = [
  {
    id: 3,
    translationKey: 'nodi',
    title: 'Nodi - Ingeniero de software',
    subtitle: 'Backend, migración cloud e integración de IA en una startup',
    period: 'Ago. 2025 - Feb. 2026',
    role: 'Ingeniero de software (backend / cloud)',
    team: 'Startup de 7 personas en Bogotá; dailies con todo el equipo y gestión horizontal',
    status: 'completed',
    context:
      'Nodi es una startup donde el backend y el cloud están en el centro del producto. Mi trabajo se centró en la plataforma de reclutamiento: APIs, datos y servicios de IA.',
    responsibilities: [
      'Desarrollar APIs REST escalables con Python y FastAPI según la lógica de negocio.',
      'Migrar la base de datos Supabase a PostgreSQL en GCP para reforzar la arquitectura cloud.', // TODO: confirmar origen (Supabase o Sybase)
      'Diseñar la estructura de buckets en Google Cloud Storage para organizar CV, PDF e imágenes.',
      'Integrar las APIs de IA de Google para enriquecer las funcionalidades de las aplicaciones.',
      'Migrar la autenticación y la base de usuarios a Firebase Authentication.',
      'Participar en procesos ETL e integrar el frontend con React.',
    ],
    results: [
      'Base de datos migrada a PostgreSQL en GCP con una arquitectura cloud más sólida.',
      'Objetos no estructurados (CV, PDF, imágenes) organizados en buckets.',
      'Aplicaciones enriquecidas con funcionalidades de IA.',
      'Autenticación centralizada con Firebase Authentication.',
    ],
    techGroups: [
      { label: 'Backend', items: ['Python', 'FastAPI', 'REST'] },
      { label: 'Datos', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'ETL'] },
      { label: 'Cloud', items: ['GCP', 'Cloud Storage', 'Firebase Auth', 'APIs de IA de Google', 'Docker'] },
      { label: 'Frontend', items: ['React', 'TypeScript'] },
    ],
    skills: ['Autonomía', 'Polivalencia', 'Iniciativa', 'Adaptación en entorno startup'],
  },
  {
    id: 4,
    translationKey: 'sga',
    title: 'Sistema de Gestión Académica (SGA)',
    subtitle: 'MVP para reemplazar un proceso manual en Access/Excel',
    period: '2025', // TODO: confirmar (CV: may-jul 2025 / bucket: feb-jun 2025)
    role: 'Desarrollador backend y full stack',
    team: 'Equipo de 7 personas',
    status: 'completed',
    context:
      'El Colegio Josué Manrique gestionaba preinscripciones, notas y asistencia con un proceso manual en Access y Excel. Desarrollamos un MVP web que lo reemplaza, con un impacto social directo.',
    responsibilities: [
      'Desarrollar con FastAPI los módulos de preinscripción (con PDF), autenticación por roles y administración.',
      'Implementar el seguimiento de notas y asistencia.',
      'Aplicar la arquitectura SOFEA con microservicios para separar la interfaz de los servicios backend.',
      'Montar CI/CD con GitHub Actions, contenedores con Docker y monitoreo con Prometheus y Grafana.',
      'Escribir pruebas automatizadas con Selenium.',
      'Documentar el proceso en un artículo de Medium.',
    ],
    results: [
      'MVP entregado que reemplaza el proceso Access/Excel.',
      'Código modular que mejora el mantenimiento y acelera las entregas.',
      'Proceso compartido públicamente mediante un artículo en Medium.',
    ],
    architecture: 'SOFEA: frontend React desacoplado de microservicios FastAPI con MongoDB y una base relacional.',
    techGroups: [
      { label: 'Backend', items: ['Python', 'FastAPI', 'REST'] },
      { label: 'Datos', items: ['PostgreSQL', 'MongoDB'] }, // TODO: el CV menciona MySQL, confirma
      { label: 'DevOps', items: ['Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Selenium'] },
      { label: 'Frontend', items: ['React', 'TypeScript', 'JS', 'HTML', 'CSS'] },
    ],
    skills: ['Arquitectura SOFEA', 'DevOps', 'Trabajo en equipo', 'Comunicación con el cliente', 'Impacto social'],
    links: { github: '', article: '' }, // TODO: URLs del repositorio y del artículo de Medium
  },
  {
    id: 2,
    translationKey: 'orion',
    title: 'ORION - Módulo de mantenimiento (Yunex Traffic)',
    subtitle: 'Mantenimiento de dispositivos de transporte inteligente (ITS)',
    period: 'Mar. - Jul. 2026',
    role: 'Practicante de ingeniería de software full stack',
    team: 'Equipo ORION de 6 desarrolladores, Bogotá',
    status: 'completed',
    context:
      'ORION es la solución interna de Yunex Traffic para el seguimiento de operaciones de campo. Mi módulo cubre el mantenimiento de equipos ITS para los técnicos.',
    responsibilities: [
      'Desarrollar el backend (Java, Spring Boot) y el frontend (React) de los módulos de eventos, grupos e inventario.',
      'Estructurar el código con arquitectura hexagonal para separar la lógica de negocio de los adaptadores técnicos.',
      'Exponer y consumir APIs REST para integrar los módulos en ORION.',
      'Adaptarme a un proyecto y a un contexto de negocio ya existentes.',
    ],
    results: [
      'Módulos de eventos, grupos e inventario integrados en ORION y usados por los técnicos.',
      'Mejor trazabilidad del inventario de equipos.',
      'Solución pensada para evolucionar hacia un producto comercializable, más allá del uso interno.',
    ],
    architecture: 'Arquitectura hexagonal: dominio aislado, puertos y adaptadores REST/persistencia.',
    techGroups: [
      { label: 'Backend', items: ['Java', 'Spring Boot', 'REST', 'Arquitectura hexagonal'] },
      { label: 'Frontend', items: ['React'] },
    ],
    skills: ['Autonomía', 'Rigor', 'Trabajo en equipo', 'Adaptación a código existente'],
  },
  {
    id: 1,
    translationKey: 'cdc',
    title: 'Arquitectura CDC para integración de datos',
    subtitle: 'POC de ingesta incremental en tiempo real para Clever Cloud',
    period: 'Sept. 2026 - en curso',
    role: 'Diseño del POC y evaluación experimental',
    status: 'in-progress',
    context:
      'Clever Cloud necesita ingerir datos de forma incremental desde varias bases de origen hacia un data warehouse, con aislamiento por cliente.',
    responsibilities: [
      'Capturar cambios del WAL de tres bases PostgreSQL simuladas con dbgen mediante Debezium, filtrando archivos pesados.',
      'Transportar los eventos con Apache Pulsar, aislados por cliente (multi-tenant).',
      'Realizar joins y agregaciones con Apache Flink antes de cargar en una base analítica PostgreSQL.',
      'Probar el pipeline en cuatro escenarios: carga inicial, adición incremental, detección de cambios y CDC continuo.',
      'Evaluar experimentalmente fiabilidad, escalabilidad y latencia.',
    ],
    results: [
      'La evaluación experimental valida la fiabilidad, la escalabilidad y la reducción de latencia del pipeline (proyecto en curso).',
    ],
    architecture: 'PostgreSQL (WAL) -> Debezium -> Apache Pulsar (multi-tenant) -> Apache Flink -> PostgreSQL analítico.',
    techGroups: [
      { label: 'Captura y transporte', items: ['Debezium', 'Apache Pulsar'] },
      { label: 'Procesamiento', items: ['Apache Flink', 'ETL/ELT'] },
      { label: 'Datos', items: ['PostgreSQL', 'Data Warehouse', 'dbgen'] },
    ],
    skills: ['Pensamiento analítico', 'Evaluación experimental', 'Comunicación con el cliente', 'Rigor'],
  },
  {
    id: 5,
    translationKey: 'monitoria',
    title: 'Monitor de programación - Universidad Nacional de Colombia',
    subtitle: 'Acompañamiento académico en programación C++',
    period: 'Feb. - may. y jul. - sept. 2025',
    role: 'Monitor de programación',
    team: 'Equipo de 3 monitores',
    status: 'completed',
    context:
      'Acompañamiento de más de 100 estudiantes de programación en C++ durante dos horas al día, dos días por semana.',
    responsibilities: [
      'Corregir ejercicios de programación en C++.',
      'Acompañar a los estudiantes en la resolución de problemas.',
      'Consolidar los conceptos fundamentales de programación.',
    ],
    results: [
      'Más de 100 estudiantes acompañados durante el periodo académico.',
      'Refuerzo de conceptos fundamentales mediante seguimiento y retroalimentación.',
    ],
    techGroups: [
      { label: 'Programación', items: ['C++'] },
      { label: 'Competencias', items: ['Enseñanza', 'Comunicación', 'Trabajo en equipo'] },
    ],
    skills: ['Comunicación', 'Enseñanza', 'Trabajo en equipo', 'Paciencia'],
  },
];