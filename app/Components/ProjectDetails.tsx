// ProjectDetails.js
import React from 'react';
import { Project } from './Project'; // Assuming you have defined the Project interface in a separate file

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className=''>
      <h2 className='my-2 text-2xl' >{project.title}</h2>
      <p className='my-4 text-xl'>{project.description}</p>
      <p className='text-base'>
        GitHub: <a href={project.github}>{project.github}</a>
      </p>
    </div>
  );
};

export default ProjectDetails;
