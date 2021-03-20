import React from 'react';
import './qualificationContainer.scss';
import Qualification from '../qualification/Qualification'

const QualificationContainer = () => {

    return(

        <section className="qualificationContainer" id="qualification">

            <span className="qualificationContainer__Subtitle">Experiencia y educación</span>
            <h2 className="qualificationContainer__Title">Calificaciones</h2>

            <Qualification/>

        </section>
    )
}

export default QualificationContainer;