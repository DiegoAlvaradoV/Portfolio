import React from 'react';
import './projectsContainer.scss';
import ProjectsNav from '../projectsNav/ProjectsNav'

const ProjectsContainer = () => {

    return(

        <section className="projectsContainer" id="projects">

            <span className="projectsContainer__Subtitle">Trabajos recientes</span>
            <h2 className="projectsContainer__Title">Proyectos</h2>

            <ProjectsNav/>

        </section>
    )
}

export default ProjectsContainer;