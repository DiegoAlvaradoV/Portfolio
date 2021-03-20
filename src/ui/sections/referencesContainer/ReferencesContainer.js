import React from 'react';
import './referencesContainer.scss';
import References from '../references/References'

const ReferencesContainer = () => {

    return(

        <section className="referencesContainer" id="references">
            
            <span className="referencesContainer__Subtitle">Declaraciones de clientes</span>
            <h2 className="referencesContainer__Title">Referencias</h2>

            <References/>

        </section>
    )
}

export default ReferencesContainer;