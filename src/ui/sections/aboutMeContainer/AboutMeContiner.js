import React from 'react';
import './aboutMeContainer.scss';
import AboutMe from '../aboutMe/AboutMe'

const AboutMeContainer = () => {

    return(

        <section className="aboutMeContainer" id="aboutMe">

            <span className="aboutMeContainer__Subtitle">Desenvolvimiento y aptitudes.</span>
            <h2 className="aboutMeContainer__Title">Acerca de mí</h2>

            <AboutMe/>

        </section>
    )
}

export default AboutMeContainer;