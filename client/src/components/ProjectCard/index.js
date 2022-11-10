import React from 'react';
//import Card from 'react-bootstrap/Card';
function ProjectCard(props){
    return (
      <div className="card"style={{ width: '36rem' }} >
      <img src="plant.jpg" style={{ height: '75px'}} alt=""/>
      <div>
        <div className="title">{props.title}Title </div>
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
      </div>
    </div>
     );
}

export default ProjectCard;