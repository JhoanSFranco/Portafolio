import { PersonalInfo, Project, ProjectDetail, Service, Technology, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Jhoan Sebastián Franco Ruiz',
  title: 'Software Engineer',
  description: 'Ingeniero full stack con énfasis en backend. Diseño APIs fiables, sistemas distribuidos y pipelines de datos en tiempo real, y me adapto rápido al stack que cada proyecto necesita.',
  location: 'Brest, France',
  email: 'solosebax265@gmail.com', // TODO: usar el mismo email que en el CV
  phone: '+33 7 52 91 66 63',
  linkedin: 'https://www.linkedin.com/in/jhoan-sebastián-franco-46954b28a/',
  github: 'https://github.com/JhoanSFranco',
  resume_spanish: '/assets/resumes/CV_JHOAN_FRANCO_SPANISH_v2.pdf',
  resume_english: '/assets/resumes/CV_JHOAN_FRANCO_ANGLAIS_v2.pdf',
  resume_francais: '/assets/resumes/CV_JHOAN_FRANCO_FRANCAIS_v2.pdf'
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

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const technologies: Technology[] = [
  // Languages
  { name: 'Java', icon: devicon('java/java-original.svg') },
  { name: 'Python', icon: devicon('python/python-original.svg') },
  { name: 'JavaScript', icon: devicon('javascript/javascript-original.svg') },
  { name: 'TypeScript', icon: devicon('typescript/typescript-original.svg') },
  { name: 'C++', icon: devicon('cplusplus/cplusplus-original.svg') },
  { name: 'R', icon: devicon('r/r-original.svg') },
  { name: 'Go', icon: devicon('go/go-original.svg') },
  { name: 'Elixir', icon: devicon('elixir/elixir-original.svg') },

  // Backend & frontend
  { name: 'Spring Boot', icon: devicon('spring/spring-original.svg') },
  { name: 'FastAPI', icon: devicon('fastapi/fastapi-original.svg') },
  { name: 'Django', icon: devicon('django/django-plain.svg') },
  { name: 'React', icon: devicon('react/react-original.svg') },
  { name: 'HTML5', icon: devicon('html5/html5-original.svg') },
  { name: 'CSS3', icon: devicon('css3/css3-original.svg') },
  // Data
  { name: 'PostgreSQL', icon: devicon('postgresql/postgresql-original.svg') },
  { name: 'MySQL', icon: devicon('mysql/mysql-original.svg') },
  { name: 'MongoDB', icon: devicon('mongodb/mongodb-original.svg') },
  { name: 'Redis', icon: devicon('redis/redis-original.svg') },
  { name: 'Apache Spark', icon: devicon('apachespark/apachespark-original.svg') },
  { name: 'Apache Flink', icon: 'https://cdn.simpleicons.org/apacheflink' },
  { name: 'Apache Pulsar', icon: 'https://cdn.simpleicons.org/apachepulsar' },
  // { name: 'Debezium', icon: 'https://cdn.simpleicons.org/debezium' },
  // Cloud & DevOps
  { name: 'Google Cloud Platform', icon: devicon('googlecloud/googlecloud-original.svg') },
  { name: 'Firebase', icon: devicon('firebase/firebase-plain.svg') },
  { name: 'Docker', icon: devicon('docker/docker-original.svg') },
  { name: 'Kubernetes', icon: devicon('kubernetes/kubernetes-plain.svg') },
  { name: 'GitHub Actions', icon: devicon('githubactions/githubactions-original.svg') },
  { name: 'Grafana', icon: devicon('grafana/grafana-original.svg') },
  { name: 'Git', icon: devicon('git/git-original.svg') },
  { name: 'Selenium', icon: devicon('selenium/selenium-original.svg') },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Backend pensado para evolucionar',
    description: 'Diseño APIs REST y servicios que mantienen la lógica de negocio independiente de frameworks e infraestructura (hexagonal, microservicios o un monolito bien estructurado, según lo que pida el contexto), para que los sistemas crezcan y cambien sin tener que reescribirse.',
    icon: 'server'
  },
  {
    id: 2,
    title: 'De principio a fin',
    description: 'Llevo cada funcionalidad desde el modelo de datos hasta la API y la interfaz, y la entrego con CI/CD, contenedores y monitoreo. ¿Un stack nuevo? Me pongo al día rápido y me concentro en lo que el producto necesita.',
    icon: 'code'
  },
  {
    id: 3,
    title: 'Datos que fluyen con fiabilidad',
    description: 'Migraciones, ETL/ELT y pipelines orientados a eventos diseñados para medirse: la fiabilidad, la escalabilidad y la latencia se prueban, nunca se suponen.',
    icon: 'database'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Arquitectura CDC para integración de datos',
    icon: '/assets/images/imagen_proyecto_cdc.png',
    description: 'Pipeline de Change Data Capture en tiempo real para Clever Cloud que transmite los cambios de varias fuentes PostgreSQL hacia un data warehouse con Debezium, Apache Pulsar y Apache Flink.',
    technologies: ['Debezium', 'Apache Pulsar', 'Apache Flink', 'PostgreSQL', 'CDC', 'ETL/ELT'],
    link: '#',
    translationKey: 'cdc'
  },
  {
    id: 2,
    title: 'Módulo de mantenimiento ORION – Yunex Traffic',
    icon: '/assets/images/imagen_proyecto_orion.png',
    description: 'Módulo full stack de mantenimiento para la plataforma ORION de Yunex Traffic, usado por técnicos para el seguimiento de equipos ITS y construido con Spring Boot, React y arquitectura hexagonal.',
    technologies: ['Java', 'Spring Boot', 'React', 'REST', 'Arquitectura hexagonal'],
    link: '#',
    translationKey: 'orion'
  },
  {
    id: 3,
    title: 'Nodi – Migración cloud y servicios de IA',
    icon: '/assets/images/imagen_proyecto_nodi.png',
    description: 'Backend y cloud para una startup de reclutamiento: migración completa a PostgreSQL en GCP y servicios FastAPI que integran las APIs de IA de Google.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'GCP', 'Cloud Storage', 'Firebase Auth', 'AI integration'],
    link: '#',
    translationKey: 'nodi'
  },
  {
    id: 4,
    title: 'Sistema de Gestión Académica (SGA)',
    icon: '/assets/images/imagen_proyecto_sga.png',
    description: 'Plataforma web que reemplaza el proceso en Access/Excel de un colegio, desarrollada por un equipo de 7 con microservicios FastAPI y React, CI/CD y monitoreo.',
    technologies: ['FastAPI', 'React', 'MongoDB', 'MySQL', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana'],
    link: '#',
    translationKey: 'sga'
  },
  {
    id: 5,
    title: 'Monitor de C++ – Universidad Nacional de Colombia',
    icon: '/assets/images/imagen_proyecto_monitoria.png',
    description: 'Acompañamiento de más de 100 estudiantes de programación en C++ dentro de un equipo de tres monitores.',
    technologies: ['C++', 'Enseñanza', 'Comunicación', 'Trabajo en equipo'],
    link: '#',
    translationKey: 'monitoria'
  }
];

export const projectDetails: ProjectDetail[] = [
  {
    id: 3,
    translationKey: 'nodi',
    title: 'Nodi – Migración cloud y servicios de IA',
    subtitle: 'Servicios backend, migración cloud e integración de IA para una plataforma de reclutamiento',
    period: 'Ago. 2025 - Feb. 2026',
    role: 'Ingeniero de software (backend / cloud)',
    team: 'Startup de siete personas en Bogotá, con dailies y una estructura horizontal',
    status: 'completed',
    context:
      'Nodi desarrolla una plataforma de reclutamiento en la que el backend y el cloud son el centro del producto. El reto era llevar la plataforma a una base cloud más sólida (datos, archivos y autenticación) sin dejar de entregar nuevas funcionalidades, incluidas las basadas en IA.',
    responsibilities: [
      'Construí APIs REST escalables en Python con FastAPI, traduciendo los requisitos de negocio en lógica de servicio limpia.',
      'Migré toda la base de datos de Supabase a PostgreSQL en GCP.', // TODO: confirmar origen (Supabase o Sybase)
      'Diseñé la estructura de buckets en Google Cloud Storage para CV, PDF e imágenes, separando los archivos no estructurados de los datos relacionales.',
      'Integré las APIs de IA de Google en los servicios backend para habilitar nuevas funcionalidades.',
      'Migré la autenticación y la base de usuarios a Firebase Authentication.',
      'Participé en procesos ETL y conecté los servicios backend con el frontend en React.',
    ],
    results: [
      'Capa de datos en PostgreSQL sobre GCP, con una arquitectura cloud más sólida y escalable.',
      'Archivos no estructurados organizados en una estructura de buckets clara y mantenible.',
      'Funcionalidades de IA integradas al producto mediante servicios backend.',
      'Autenticación centralizada con Firebase.',
    ],
    techGroups: [
      { label: 'Backend', items: ['Python', 'FastAPI', 'REST'] },
      { label: 'Datos', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'ETL'] },
      { label: 'Cloud', items: ['GCP', 'Cloud Storage', 'Firebase Auth', 'APIs de IA de Google', 'Docker'] },
      { label: 'Frontend', items: ['React', 'TypeScript'] },
    ],
    skills: ['Autonomía', 'Polivalencia', 'Iniciativa', 'Adaptación rápida en startup'],
  },
  {
    id: 4,
    translationKey: 'sga',
    title: 'Sistema de Gestión Académica (SGA)',
    subtitle: 'Una plataforma web que reemplaza el proceso manual en Access/Excel de un colegio',
    period: 'May. - Jul. 2025', // TODO: confirmar (CV: may-jul 2025 / bucket: feb-jun 2025)
    role: 'Desarrollador backend y full stack',
    team: 'Equipo de 7 personas',
    status: 'completed',
    context:
      'El Colegio Josué Manrique gestionaba preinscripciones, notas y asistencia de forma manual en Access y Excel. El reto era reemplazar ese proceso por una aplicación web en la que el colegio pudiera confiar y que pudiera mantener, desarrollada por un equipo de siete personas en un solo periodo académico.',
    responsibilities: [
      'Construí con FastAPI los módulos de preinscripción (con generación de PDF), autenticación por roles y administración.',
      'Implementé el seguimiento de notas y asistencia.',
      'Apliqué una arquitectura SOFEA con microservicios para desacoplar la interfaz de los servicios backend.',
      'Monté CI/CD con GitHub Actions, contenedores con Docker y monitoreo con Prometheus y Grafana.',
      'Escribí pruebas automatizadas de extremo a extremo con Selenium.',
      'Documenté el proyecto y su proceso de ingeniería en un artículo de Medium.',
    ],
    results: [
      'MVP entregado que reemplaza el proceso en Access/Excel del colegio.',
      'Código modular y probado, más fácil de mantener y extender.',
      'Proceso de ingeniería compartido públicamente en un artículo de Medium.',
    ],
    architecture: 'SOFEA: frontend React desacoplado de microservicios FastAPI con MongoDB y una base relacional, en contenedores Docker y monitoreado con Prometheus y Grafana.',
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
    title: 'Módulo de mantenimiento ORION – Yunex Traffic',
    subtitle: 'Gestión del mantenimiento de equipos de sistemas de transporte inteligente (ITS)',
    period: 'Mar. - Jul. 2026',
    role: 'Practicante de ingeniería de software full stack',
    team: 'Equipo ORION de seis desarrolladores, Bogotá',
    status: 'completed',
    context:
      'ORION es la plataforma de Yunex Traffic para el seguimiento de operaciones de campo. Construí el módulo que usan los técnicos para gestionar el mantenimiento de los equipos ITS. El reto era integrarme limpiamente a un código y a un dominio de negocio ya existentes, diseñando el módulo para que pudiera convertirse en un producto comercial y no solo en una herramienta interna.',
    responsibilities: [
      'Construí el backend (Java, Spring Boot) y el frontend (React) de los módulos de eventos, grupos e inventario.',
      'Estructuré el código con arquitectura hexagonal, aislando la lógica de negocio de los adaptadores técnicos.',
      'Expuse y consumí APIs REST para integrar los módulos en ORION.',
      'Me puse al día rápidamente con un código existente y un dominio de negocio nuevo para mí.',
    ],
    results: [
      'Módulos de eventos, grupos e inventario integrados en ORION y usados por los técnicos.',
      'Mejor trazabilidad del inventario de equipos.',
      'Una arquitectura lista para evolucionar hacia un producto comercial, más allá del uso interno.',
    ],
    architecture: 'Arquitectura hexagonal: núcleo de dominio aislado, con puertos y adaptadores para REST y persistencia.',
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
    subtitle: 'Ingesta incremental de datos en tiempo real para Clever Cloud',
    period: 'Sept. 2026 - en curso',
    role: 'Diseño de la arquitectura y evaluación experimental',
    status: 'in-progress',
    context:
      'Clever Cloud necesita ingerir datos de forma incremental desde varias bases de origen hacia un data warehouse, manteniendo aislados los datos de cada cliente. El reto es capturar cada cambio casi en tiempo real, procesarlo entre fuentes y demostrar con mediciones que el pipeline sigue siendo fiable a medida que crece la carga.',
    responsibilities: [
      'Capturé los cambios del write-ahead log (WAL) de tres bases PostgreSQL pobladas con dbgen, usando Debezium y filtrando los archivos pesados.',
      'Transporté los eventos con Apache Pulsar, con aislamiento por cliente (multi-tenant).',
      'Implementé joins y agregaciones en Apache Flink antes de cargar una base analítica PostgreSQL.',
      'Probé el pipeline en cuatro escenarios: carga inicial, inserciones incrementales, detección de cambios y CDC continuo.',
      'Diseñé experimentos para medir fiabilidad, escalabilidad y latencia.',
    ],
    results: [
      'Los primeros resultados apuntan a un pipeline fiable, escalable y con menor latencia; la evaluación completa está en curso.',
    ],
    architecture: 'PostgreSQL (WAL) → Debezium → Apache Pulsar (multi-tenant) → Apache Flink → PostgreSQL analítico.',
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
    title: 'Monitor de C++ – Universidad Nacional de Colombia',
    subtitle: 'Acompañamiento académico en programación C++',
    period: 'Feb. - May. y Jul. - Sept. 2025',
    role: 'Monitor de programación',
    team: 'Equipo de 3 monitores',
    status: 'completed',
    context:
      'Acompañé a más de 100 estudiantes de un curso de programación en C++, dos horas al día, dos días por semana. El reto era convertir conceptos abstractos en algo que los estudiantes pudieran aplicar por su cuenta.',
    responsibilities: [
      'Corregí ejercicios de C++ y di retroalimentación concreta a los estudiantes.',
      'Ayudé a los estudiantes a resolver problemas paso a paso.',
      'Reforcé los conceptos fundamentales de programación.',
    ],
    results: [
      'Más de 100 estudiantes acompañados durante dos periodos académicos.',
      'Mejor dominio de los fundamentos gracias al seguimiento y la retroalimentación constantes.',
    ],
    techGroups: [
      { label: 'Programación', items: ['C++'] },
      { label: 'Competencias', items: ['Enseñanza', 'Comunicación', 'Trabajo en equipo'] },
    ],
    skills: ['Comunicación', 'Enseñanza', 'Trabajo en equipo', 'Paciencia'],
  },
];