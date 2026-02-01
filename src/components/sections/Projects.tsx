import { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../../data/personalData';
import { useLanguage } from '../../context/LanguageContext';
import { useProjects } from '../../hooks/useProjects';
import CardProjects from '../common/CardProjects';
import Button from '../common/Button';
import './Projects.css';

const Projects = memo(() => {
  const { t } = useLanguage();
  const { displayedProjects, showAll, hasMoreProjects, toggleShowAll } = useProjects(projects);

  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="section-subtitle">{t('projects.subtitle')}</p>
          </Col>
        </Row>
        <Row>
          {displayedProjects.map((project) => {
            const icon = project.icon || "";
            return (
              <Col key={project.id} lg={4} md={6} className="mb-4">
                <CardProjects
                  project={project}
                  icon={icon}
                />
              </Col>
            );
          })}
        </Row>
        {hasMoreProjects && (
          <Row>
            <Col lg={12} className="text-center mt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={toggleShowAll}
                className="show-more-btn"
              >
                {showAll ? t('projects.showLess') : t('projects.showMore')}
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;

