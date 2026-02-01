import { memo, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Project } from '../../types';
import { openInNewTab } from '../../utils/helpers';
import { useLanguage } from '../../context/LanguageContext';
import './CardProjects.css';

interface CardProjectsProps {
  project: Project;
  icon: string;
  onReadMore?: () => void;
}

const CardProjects = memo(({ 
  project, icon,
  onReadMore
}: CardProjectsProps) => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (project.link) {
      openInNewTab(project.link);
    }
    if (onReadMore) {
      onReadMore();
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(false);
  };

  // Usar title y description directamente, traduciendo si hay translationKey
  const title = project.translationKey
    ? t(`projects.${project.translationKey}.title`)
    : project.title;
  const description = project.translationKey
    ? t(`projects.${project.translationKey}.description`)
    : project.description;
  const readMoreText = t('projects.readMore');

  return (
    <>
      <Card className="project-card h-100">
        <Card.Body>
          <Card.Title className="project-title">
            {title}
          </Card.Title>
          {/* ICON */}
          {icon && (
            <div className="project-icon" onClick={handleImageClick} style={{cursor:'zoom-in'}}>
              <img src={icon} alt={`${project.title} icon`} />
            </div>
          )}
          {/* project description */}
          <Card.Text className="project-description">
            {description}
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
      {showModal && (
        <div className="project-image-modal" onClick={handleCloseModal}>
          <span className="close-modal" onClick={handleCloseModal}>&times;</span>
          <img src={icon} alt={`${project.title} icon`} className="modal-img" />
        </div>
      )}
    </>
  );
});

CardProjects.displayName = 'CardProjects';

export default CardProjects;

