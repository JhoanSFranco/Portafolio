import { memo } from 'react';
import { Card } from 'react-bootstrap';
import { Project } from '../../types';
import { openInNewTab } from '../../utils/helpers';
import './CardProjects.css';

interface CardProjectsProps {
  project: Project;
  onReadMore?: () => void;
  translatedTitle?: string;
  translatedDescription?: string;
  readMoreText?: string;
}

const CardProjects = memo(({ 
  project, 
  onReadMore, 
  translatedTitle,
  translatedDescription,
  readMoreText = 'Leer más →'
}: CardProjectsProps) => {
  const handleClick = () => {
    if (project.link) {
      openInNewTab(project.link);
    }
    if (onReadMore) {
      onReadMore();
    }
  };

  return (
    <Card className="project-card h-100">
      <Card.Body>
        <Card.Title className="project-title">
          {translatedTitle || project.title}
        </Card.Title>
        <Card.Text className="project-description">
          {translatedDescription || project.description}
        </Card.Text>
        <div className="project-technologies mb-3">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tech-badge">+{project.technologies.length - 4}</span>
          )}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={handleClick}
          >
            {readMoreText}
          </a>
        )}
      </Card.Body>
    </Card>
  );
});

CardProjects.displayName = 'CardProjects';

export default CardProjects;

