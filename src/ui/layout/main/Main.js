import React, {useContext} from 'react';
import './main.scss';
import contexto from '../../../api/context/contexto';
import HomeContainer from '../../sections/homeContainer/HomeContainer';
import AboutMeContainer from '../../sections/aboutMeContainer/AboutMeContiner';
import QualificationContainer from '../../sections/qualificationContainer/QualificationContainer';
import ServicesContainer from '../../sections/servicesContainer/ServicesContainer';
import ProjectMindContainer from '../../sections/projectMindContainer/ProjectMindContainer'
import ProjectsContainer from '../../sections/projectsContainer/ProjectsContainer';
import ReferencesContainer from '../../sections/referencesContainer/ReferencesContainer';
import Contact from '../../sections/contactContainer/ContactContainer';
import ContactContainer from '../../sections/contactContainer/ContactContainer';


const Main = () => {

    //SE SIMULA QUE SE RECIBE DEL CONTEXTO UN OBJETO CON LOS PROYECTOS
    const {pollos, setPollos} = useContext(contexto);

    return (

        <main>

            <HomeContainer/>

            <AboutMeContainer/>

            <QualificationContainer/>

            <ServicesContainer/>

            <ProjectMindContainer/>

            <ProjectsContainer/>

            <ReferencesContainer/>

            <ContactContainer/>

        </main>

    )
}


export default Main;