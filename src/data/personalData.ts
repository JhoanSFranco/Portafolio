import { PersonalInfo, Project, Service, Technology, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Jhoan Sebastián Franco Ruiz',
  title: 'Software Engineer',
  description: 'Soy un Desarrollador Fullstack (énfasis Backend). Actualmente trabajo en Nodi como Desarrollador de Software, especializado en el diseño y desarrollo de APIs REST con Python (FastAPI, Django REST Framework), bases de datos SQL y NoSQL y arquitectura de microservicios.',
  location: 'Bogotá, Colombia',
  email: 'jhfrancor@unal.edu.co',
  phone: '+57 305-474-1424',
  linkedin: 'https://linkedin.com/in/jhoan-sebastián-franco',
  github: 'https://github.com/JhoanSFranco',
  resume: '/CV_JHOAN_SEBASTIAN_FRANCO.pdf'
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
  { name: 'Arduino', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
  { name: 'GitHub', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  
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
    title: 'Arquitectura de Software',
    description: 'Diseño de arquitecturas escalables y mantenibles, aplicación de principios SOLID, patrones de diseño y mejores prácticas en el desarrollo de software.',
    icon: 'architecture'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Reclutamiento - Nodi',
    description: 'Desarrollo de APIs REST escalables con Python y FastAPI para un sistema de reclutamiento. Trabajo con bases de datos PostgreSQL, MongoDB, MySQL y Cassandra. Implementación de lógica de negocio, procesos ETL y migración de bases de datos.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'Docker', 'GCP'],
    link: '#',
    translationKey: 'nodi'
  },
  {
    id: 2,
    title: 'Proyecto Leroi',
    description: 'Diseño e implementación de microservicios REST para un sistema de rutas de aprendizaje. Integración con frontend web y despliegue en Google Cloud Platform (GCP), con uso de APIs de IA.',
    technologies: ['Python', 'FastAPI', 'React', 'GCP', 'Docker', 'Microservicios'],
    link: '#',
    translationKey: 'leroi'
  },
  {
    id: 3,
    title: 'Sistema de Gestión Académica (SGA)',
    description: 'Desarrollo de un MVP de sistema de gestión académica para el Colegio Josué Manrique, aplicando la arquitectura SOFEA. Backend con Python y FastAPI, PostgreSQL y MongoDB, APIs REST y despliegue con Docker; frontend en React.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'MongoDB', 'Docker'],
    link: '#',
    translationKey: 'sga'
  },
  {
    id: 4,
    title: 'Proyectos IoT',
    description: 'Desarrollo de soluciones IoT con Python, C++ y Arduino, integrando sensores, actuadores y sistemas embebidos para aplicaciones prácticas.',
    technologies: ['Python', 'C++', 'Arduino', 'IoT'],
    link: '#',
    translationKey: 'iot'
  },
  {
    id: 5,
    title: 'Proyecto Zenun',
    description: 'Desarrollo de un prototipo para la gestión de préstamos estudiantiles y eventos. Desarrollado con Django REST Framework, APIs REST y lógica de negocio integrada con frontend.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'React'],
    link: '#',
    translationKey: 'zenun'
  }
];

