import { useEffect } from 'react';
import { useParams , Link} from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectDetails, projects } from '../../data/personalData';
import { Container, Row, Col } from 'react-bootstrap';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { translationKey } = useParams<{ translationKey: string }>();
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [translationKey]);

    const project = projects.find((p) => p.translationKey === translationKey);
    const projectDetail = projectDetails.find(
        (p) => p.translationKey === translationKey
    );

    // Call back if there is not a project
    if (!project || !projectDetail) {
        return (
        <Container className="project-detail py-5 text-center">
            <h2>{t('projects.detailNotFound')}</h2>
            <Link to="/" className="back-link mt-3">← {t('projects.backToProjects')}</Link>
        </Container>
        );
    }

    // Render the project title
    const translatedTitle = project.translationKey
        ? t(`projects.${project.translationKey}.title`)
        : project.title;
    const translatedDescription = project.translationKey
        ? t(`projects.${project.translationKey}.description`)
        : project.description;
    const title = translatedTitle.startsWith('projects.')
        ? projectDetail.title
        : translatedTitle;
    const description = translatedDescription.startsWith('projects.')
        ? project.description
        : translatedDescription;

 return (
    <Container className="project-detail py-5 mt-5">
        <Link to="/" className="back-link">← {t('projects.backToProjects')}</Link>

        <h1 className="mt-2 mb-4">{title}</h1>
        <p className="project-detail-subtitle">{projectDetail.subtitle}</p>

        <Row className="g-4">
            <Col md={7}>
            {project.icon && (
                <img src={project.icon} alt={title} className="project-detail-img" />
            )}
            </Col>

            <Col md={5}>
            <div className="project-detail-meta">
                <p><strong>{t('projects.period')}:</strong> {projectDetail.period}</p>
                <p><strong>{t('projects.role')}:</strong> {projectDetail.role}</p>
                {projectDetail.team && (
                    <p><strong>{t('projects.team')}:</strong> {projectDetail.team}</p>
                )}
                <p>
                    <strong>{t('projects.status')}:</strong>{' '}
                    {projectDetail.status === 'completed'
                        ? t('projects.completed')
                        : t('projects.inProgress')}
                </p>
            </div>

            <h5>{t('projects.descriptionTitle')}</h5>
            <p className="project-detail-description">{description}</p>
            <p className="project-detail-context">{projectDetail.context}</p>

            <h5 className="mt-4">{t('projects.technologies')}</h5>
            <div className="project-technologies">
                {projectDetail.techGroups.flatMap((group) => group.items).map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
                ))}
            </div>
            </Col>
        </Row>

        <Row className="g-4 mt-2">
            <Col md={6}>
                <h5>{t('projects.responsibilities')}</h5>
                <ul className="project-detail-list">
                    {projectDetail.responsibilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </Col>
            <Col md={6}>
                <h5>{t('projects.results')}</h5>
                <ul className="project-detail-list">
                    {projectDetail.results.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </Col>
        </Row>

        {projectDetail.architecture && (
            <section className="project-detail-section">
                <h5>{t('projects.architecture')}</h5>
                <p className="project-detail-description">{projectDetail.architecture}</p>
            </section>
        )}

        <section className="project-detail-section">
            <h5>{t('projects.skills')}</h5>
            <div className="project-technologies">
                {projectDetail.skills.map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                ))}
            </div>
        </section>

        {projectDetail.links && Object.values(projectDetail.links).some(Boolean) && (
            <div className="project-detail-links">
                {Object.entries(projectDetail.links).map(([label, url]) => url && (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                        {label}
                    </a>
                ))}
            </div>
        )}
    </Container>
  );
};

export default ProjectDetails;