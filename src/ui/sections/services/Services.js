import React,{useState} from 'react';
import './services.scss';

const Services = () => {

    return(

        <>
        <div className="services">

            <div className="services__Content">
                
                <div className="services__ContentBox">
                    
                    <i className="far fa-window-restore services__ContentIcon"></i>

                    <h3 className="services__ContentTitle">Diseño Web</h3>

                    <p className="services__ContentDescription">Planteamiento del proyecto y mockup responsive.</p>
                    
                </div>

                <div className="services__ContentBox">

                    <i className="fas fa-laptop-code services__ContentIcon"></i>
                    
                    <h2 className="services__ContentTitle">Desarrollo Web</h2>

                    <p className="services__ContentDescription">Construcción y codificación.</p>
                    
                </div>

                <div className="services__ContentBox">

                    <i className="fas fa-file-code services__ContentIcon"></i>
                    
                    <h2 className="services__ContentTitle">Código Limpio</h2>

                    <p className="services__ContentDescription">Patrones de diseño que implementan buenas prácticas.</p>
                    
                </div>

                <div className="services__ContentBox">
                    
                    <i className="fab fa-searchengin services__ContentIcon"></i>

                    <h2 className="services__ContentTitle">Seo Marketing</h2>

                    <p className="services__ContentDescription">Optimización para alcanzar buenos posicionamientos orgánicos.</p>
                    
                </div>

                <div className="services__ContentBox">
                    
                    <i className="fas fa-chalkboard-teacher services__ContentIcon"></i>

                    <h2 className="services__ContentTitle">Capacitaciones</h2>

                    <p className="services__ContentDescription">Formación de administración del sitio web.</p>
                    
                </div>

                <div className="services__ContentBox">
                    
                    <i className="far fa-life-ring services__ContentIcon"></i>

                    <h2 className="services__ContentTitle">Garantías y Soportes</h2>

                    <p className="services__ContentDescription">Mantenimientos y actualizaciones.</p>
                    
                </div>

            </div>

        </div>

        </>
    )
}

export default Services;