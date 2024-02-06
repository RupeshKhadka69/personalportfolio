// ProjectList.js
import React from 'react';
import { projects } from './Project';
interface ProjectListProps {
    onSelectProject: (index: number) => void;
  }
  
  const ProjectList: React.FC<ProjectListProps> = ({ onSelectProject }) => {
  return (
    <div  >
      <h2>Project List</h2>
      <div className='mt-[2rem]'>
       <div className='pp relative'>

      <ul className='ull dark:bg-slate-800 bg-white'>
        {projects.map((project, index) => (
            <li className='pb-[0.5rem]' key={index} onClick={() => onSelectProject(index)}>
            {project.title}
          </li>
        ))}
      </ul>
        </div>
        </div>
    </div>
  );
};

export default ProjectList;
