// ProjectSection.js
"use client"
import React, { useState } from 'react';
import { projects } from './Project';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const handleSelectProject = (index:number) => {
    setSelectedProject(index);
  };

  return (
    <div className='my-[5rem] '>


    <div className='flex justify-center  items-start md:flex-row   '>
      <div className='  max-w-[37rem] px-[2rem]  '>
        <ProjectDetails project={projects[selectedProject]} />
      </div>
      <div className=''>
        <ProjectList onSelectProject={handleSelectProject} />
      </div>
    </div>
    </div>
  );
};

export default ProjectSection;
