import React from 'react';
import './servicesContainer.scss';
import Services from '../services/Services'

const ServicesContainer = () => {

    return(

        <section className="servicesContainer" id="services">

            <span className="servicesContainer__Subtitle">Utilidades y funcionalidades</span>
            <h2 className="servicesContainer__Title">Servicios</h2>

            <Services/>

        </section>
    )
}

export default ServicesContainer;