import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';


function Blog() {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: '',
            image: "",
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
    const [formState, setFormState] = useState({ title: '', description: '', platImage: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { title, description, plantImage } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {

    if (!e.target.value.length) {
    setErrorMessage(`${e.target.name} is required.`);
    } else {
    setErrorMessage('');
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <form className="center" id="blog-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input type="text" name="title" defaultValue={title} onBlur={handleChange} placeholder="Title:" />
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea name="description" rows="1" defaultValue={description} onBlur={handleChange} placeholder="Description:" />
        </div>
        <div>
            <label htmlFor="platImage">Choose a plant picture:</label>
            <input type="file" id="platImage" name="plantImage" accept="image/png, image/jpeg"/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="button" data-testid="button" type="submit">Post!</button>
      </form>
        
             {projects.map(project => (
              <>
                <ProjectCard image={project.image} key={project.id} title={project.title}/>
         
            </>
            ))} 
        
    </div>
  );
}
export default Blog;