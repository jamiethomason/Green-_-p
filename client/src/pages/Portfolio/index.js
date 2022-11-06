import React from 'react';
import ProjectCard from '../ProjectCard';

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: '',
            image: "require ('path to image file')",
            deployed: '',
            github: ''
        },
        {
            id: 2,
            title: 'Project Two',
            description: '',
            image: '',
            deployed: '',
            github: ''
        },
        {
            id: 3,
            title: 'Project Three',
            description: '',
            image: '',
            deployed: '',
            github: ''
        },
        {
            id: 4,
            title: 'Project Four',
            description: '',
            image: '',
            deployed: '',
            github: ''
        }
    ]
  return (
    <div>
      <h1>Portfolio Page</h1>
        <div>
            {projects.map(project => (
                <ProjectCard key={project.id} title={project.title}/>
            ))}
        </div>
    </div>
  );
}