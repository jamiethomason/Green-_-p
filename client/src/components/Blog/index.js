import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css'


function Blog() {
    const projects = [
        {
            id: 1,
            title: '',
            description: '',
            image: "",
            deployed: '',
            github: ''
        },

    ]
    const [formState, setFormState] = useState({ title: '', description: '', plantImage: '' });

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
      
      <form className="center" style={{ width: 'device-width' }} id="blog-form" onSubmit={handleSubmit}>
      <h2>Blog Page</h2>
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
            <div>
            <input type="file" id="platImage" name="plantImage" accept="image/png, image/jpeg"/>
            </div>
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