import React, {useState, useEffect} from 'react';
import './projects.scss';


const Projects = () => {

    return(

        <>
        <div className="projects row">

            <div className="projects__Content mix web">

                <div className="projects__ContentImg">

                    <img src="https://i.ibb.co/Y3mCxLb/Sitio-Web-Calzados-Bebote.png" alt="Proyecto" className="projects__ContentImgBox"></img>

                </div>

                <div className="projects__ContentData">

                    <div className="projects__ContentDataTitle">

                        <h2 className="projects__ContentDataTitleText">Sitio Web Calzados Bebote</h2>

                    </div>

                    <span className="projects__ContentDataSubtitle">
                        Proyecto realizado con el fin de actualizar los diversos patrones de navegación para poder visualizar
                        de forma óptima los productos y sus caracteristicas..
                    </span>

                    <a href="https://diegoalvaradov.github.io/prueba/" className="projects__ContentDataButton" target="_blank">Visitar</a>

                </div>

            </div>

            <div className="projects__Content mix commerce">

                <div className="projects__ContentImgBox">

                    <img src="https://i.ibb.co/CKvGWV6/ECommerce-Calzados-Bebote.png" alt="Proyecto" className="projects__ContentImg"></img>

                </div>

                <div className="projects__ContentData" >

                    <div href="#" className="projects__ContentDataTitle">

                        <h2 className="projects__ContentDataTitleText">E-Commerce Calzados Bebote</h2>

                    </div>

                    <span className="projects__ContentDataSubtitle">
                        E-Commerce solicitado para poder visualizar, gestionar y mantener un orden estructurado de los pedidos
                        realizados por parte de los usuarios.
                    </span>

                    <a href="https://diegoalvaradov.github.io/calzados-bebote-react/" className="projects__ContentDataButton" target="_blank">Visitar</a>

                </div>

            </div>


            {/* <div className="projects__Content mix app">

                <div href="#" className="projects__ContentImgBox">

                    <img src="https://via.placeholder.com/500" alt="Proyecto" className="projects__ContentImg"></img>

                </div>

                <div className="projects__ContentData" >

                    <span className="projects__ContentDataSubtitle">Mobile App</span>

                    <div href="#" className="projects__ContentDataTitle">

                        <h2 className="projects__ContentDataTitleText">App Hospital Colombia</h2>

                    </div>

                    <a href="#" className="projects__ContentDataButton">Ver detalles</a>

                </div>

            </div> */}

        </div>

        </>
    )
}

export default Projects;