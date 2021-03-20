import React, {useContext} from 'react';
import './projectsNav.scss';
import Projects from '../../sections/projects/Projects'


const ProjectsNav = () => {

    return(

        <>

        <div className="projectsNav">

            <span className="projectsNav__Item" data-filter="all">Todos</span>

            <span className="projectsNav__Item" data-filter=".web">Web</span>

            <span className="projectsNav__Item" data-filter=".commerce">E-Commerce</span>

            {/* <span className="projectsNav__Item" data-filter=".app">App</span> */}

        </div>

        <Projects/>

        </>
    )
}

export default ProjectsNav;