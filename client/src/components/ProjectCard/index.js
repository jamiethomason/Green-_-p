import React from 'react';
import Card from 'react-bootstrap/Card';
function ProjectCard(props){
    return (
      <div style={{ width: '18rem' }} >
      <img src="https://www.fillmurray.com/640/360" style={{ height: '60px'}} alt=""/>
      <div>
        <div>{props.title}</div>
        <div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
      </div>
    </div>
     );
}

export default ProjectCard;