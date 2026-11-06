import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectDetails, projects } from '../../data/personalData';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../common/Button';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { translationKey } = useParams<{ translationKey: string }>();
    const { t, language } = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [translationKey]);

    const project = projects.find((p) => p.translationKey === translationKey);
    const projectDetail = projectDetails.find(
        (p) => p.translationKey === translationKey
    );

    let nextProjectIndex = projects.findIndex((p) => p.translationKey === translationKey) + 1;
    if (nextProjectIndex >= projects.length) {
        nextProjectIndex = 0; // Loop back to the first project if at the end
    }
    const nextProject = projects[nextProjectIndex];

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
    const translateDetail = (
        field: string,
        value: string,
        index?: number
    ) => language === 'en'
        ? t(`projects.${projectDetail.translationKey}.detail.${field}${index === undefined ? '' : `.${index}`}`)
        : value;
    const detailSubtitle = translateDetail('subtitle', projectDetail.subtitle);
    const detailPeriod = translateDetail('period', projectDetail.period);
    const detailRole = translateDetail('role', projectDetail.role);
    const detailTeam = projectDetail.team
        ? translateDetail('team', projectDetail.team)
        : undefined;
    const detailContext = translateDetail('context', projectDetail.context);
    const detailResponsibilities = projectDetail.responsibilities.map((item, index) =>
        translateDetail('responsibility', item, index)
    );
    const detailResults = projectDetail.results.map((item, index) =>
        translateDetail('result', item, index)
    );
    const detailArchitecture = projectDetail.architecture
        ? translateDetail('architecture', projectDetail.architecture)
        : undefined;
    const detailSkills = projectDetail.skills.map((skill, index) =>
        translateDetail('skill', skill, index)
    );
    const translateTechnology = (technology: string) => {
        const technologyKeys: Record<string, string> = {
            'APIs de IA de Google': 'projects.tech.googleAi',
            'Arquitectura hexagonal': 'projects.tech.hexagonalArchitecture',
        };
        const key = technologyKeys[technology];
        return language === 'en' && key ? t(key) : technology;
    };

 return (
    <Container className="project-detail py-5 mt-5">
        <Link to="/" className="back-link">← {t('projects.backToProjects')}</Link>

        <h1 className="mt-2 mb-4">{title}</h1>
        <p className="project-detail-subtitle">{detailSubtitle}</p>

        <Row className="project-detail-overview g-5 align-items-stretch">
            <Col lg={6}>
            <div className="project-detail-media">
                {project.icon && (
                    <img src={project.icon} alt={title} className="project-detail-img" />
                )}
            </div>
            </Col>

            <Col lg={6}>
            <div className="project-detail-meta">
                <p><strong>{t('projects.period')}:</strong> {detailPeriod}</p>
                <p><strong>{t('projects.role')}:</strong> {detailRole}</p>
                {detailTeam && (
                    <p><strong>{t('projects.team')}:</strong> {detailTeam}</p>
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
            <p className="project-detail-context">{detailContext}</p>

            <h5 className="mt-4">{t('projects.technologies')}</h5>
            <div className="project-technologies">
                {projectDetail.techGroups.flatMap((group) => group.items).map((tech, i) => (
                <span key={i} className="tech-badge">{translateTechnology(tech)}</span>
                ))}
            </div>
            </Col>
        </Row>

        <Row className="project-detail-panels g-4">
            <Col lg={6}>
                <div className="project-detail-panel">
                <h5>{t('projects.responsibilities')}</h5>
                <ul className="project-detail-list">
                    {detailResponsibilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
                </div>
            </Col>
            <Col lg={6}>
                <div className="project-detail-panel">
                <h5>{t('projects.results')}</h5>
                <ul className="project-detail-list">
                    {detailResults.map((item) => <li key={item}>{item}</li>)}
                </ul>
                </div>
            </Col>
        </Row>

        {detailArchitecture && (
            <section className="project-detail-section">
                <h5>{t('projects.architecture')}</h5>
                <p className="project-detail-description">{detailArchitecture}</p>
            </section>
        )}

        <section className="project-detail-section">
            <h5>{t('projects.skills')}</h5>
            <div className="project-technologies">
                {detailSkills.map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                ))}
            </div>
        </section>

        {projectDetail.links && Object.values(projectDetail.links).some(Boolean) && (
            <div className="project-detail-links">
                {Object.entries(projectDetail.links).map(([label, url]) => url && (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                        {t(`projects.link.${label}`)}
                    </a>
                ))}
            </div>
        )}

        <div className="next-project-link mt-5">
            <Button
                variant="outline-secondary"
                onClick={() => navigate(`/projects/${nextProject.translationKey}`)}
            >
                {t('projects.nextProject')} → {t(`projects.${nextProject.translationKey}.title`)}
            </Button>
        </div>
    </Container>
  );
};

export default ProjectDetails;