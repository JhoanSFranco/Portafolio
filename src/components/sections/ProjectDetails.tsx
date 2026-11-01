import { useEffect} from 'react';
import { useParams , Link} from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projects } from '../../data/personalData';
import { Container, Row, Col } from 'react-bootstrap';
import { openInNewTab } from '../../utils/helpers';
import Button from '../common/Button';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { translationKey } = useParams<{ translationKey: string }>();
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [translationKey]);

    const project = projects.find((p) => String(p.translationKey) === translationKey);

    // Call back if there is not a project
    if (!project) {
        return (
        <Container className="project-detail py-5 text-center">
            <h2>Project not found</h2>
            <Button variant="primary" className="mt-3" href="/">
                ← Back to home
            </Button>
        </Container>
        );
    }

    // Render the project title
    const title = project.translationKey
        ? t(`projects.${project.translationKey}.title`)
        : project.title;
    const description = project.translationKey
        ? t(`projects.${project.translationKey}.description`)
        : project.description;

 return (
    <Container className="project-detail py-5 mt-5">
        <Link to="/" className="back-link">← Back to projects</Link>

        <h1 className="mt-3 mb-4">{title}</h1>

        <Row className="g-4">
            <Col md={7}>
            {project.icon && (
                <img src={project.icon} alt={title} className="project-detail-img" />
            )}
            </Col>

            <Col md={5}>
            <h5>Description</h5>
            <p className="project-detail-description">{description}</p>

            <h5 className="mt-4">Technologies</h5>
            <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
                ))}
            </div>

            <div className="mt-4 d-flex gap-1 flex-wrap">
                {project.link && (
                <Button
                    variant="outline-primary"
                    className="mt-2"
                    onClick={() => openInNewTab(project.link!)}
                >
                    View project next project→
                </Button>
                )}
            </div>
            </Col>
        </Row>
    </Container>
  );
};

export default ProjectDetails;