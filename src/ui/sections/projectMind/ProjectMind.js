import React from 'react';
import './projectMind.scss';

const ProjectMind = () => {


    return(

        <div className="projectMind">
            
            <div className="projectMind__Data">
                
                <i className="fas fa-code-branch projectMind__DataIcon"></i>

                <div className="projectMind__DataContent">

                    <h2 className="projectMind__DataContentTitle">¿Algún proyecto en mente?</h2>

                    <p className="projectMind__DataContentDescription">Podemos hacerlo realidad</p>

                </div>

                <div className="projectMind__DataContact">

                    <a href="#contact" className="projectMind__DataContactButton">Contáctame</a>

                </div>

            </div>
            
        </div>
    )
}

export default ProjectMind;