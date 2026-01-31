import { useState, useMemo, useCallback } from 'react';
import { Project } from '../types';
import { PROJECTS_INITIAL_LIMIT } from '../constants';

/**
 * Custom hook to manage projects display
 */
export const useProjects = (projects: Project[]) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, PROJECTS_INITIAL_LIMIT);
  }, [showAll, projects]);

  const hasMoreProjects = useMemo(
    () => projects.length > PROJECTS_INITIAL_LIMIT,
    [projects.length]
  );

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  return {
    displayedProjects,
    showAll,
    hasMoreProjects,
    toggleShowAll,
  };
};

