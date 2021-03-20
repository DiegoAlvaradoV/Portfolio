import React from 'react';
import './contactContainer.scss';
import Contact from '../contact/Contact'

const ContactContainer = () => {

    return(

        <section className="contactContainer" id="contact">
            
            <span className="contactContainer__Subtitle">Para proyectos</span>
            <h2 className="contactContainer__Title">Contáctame</h2>

            <Contact/>

        </section>
    )
}

export default ContactContainer;