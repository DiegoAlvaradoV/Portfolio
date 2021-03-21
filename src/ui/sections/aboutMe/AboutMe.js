import React from 'react';
import './aboutMe.scss';

const AboutMe = () => {

    return(

        <div className="aboutMe">

            <div className="aboutMe__Data">

                <p className="aboutMe__DataInfo">

                    <span>
                        Soy un Front End Web Developer Jr trabajando actualmente de forma Freelance camino a ser Licenciado Informático, apasionado por la creación y 
                        el desarrollo de interfaces Web y estando en constante evolución, adquiriendo cada día más conocimientos en este amplio campo.
                    </span>

                </p>

                <img src="https://i.ibb.co/ZB4pvyN/SET-UP.jpg" alt="Diego Alvarado" className="aboutMe__Img"></img>


                <div className="aboutMe__DataTec row">
                    
                    <span className="aboutMe__DataTecSubtitle">Tecnologías</span>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>HTML</span>
                        <i className="fab fa-html5"></i>
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>CSS</span> 
                        <i className="fab fa-css3-alt"></i>     
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>JavaScript</span>
                        <i className="fab fa-js"></i>      
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>jQuery</span>
                        <i className='bx bxl-jquery'></i>    
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>React</span>
                        <i className="fab fa-react"></i>      
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>Angular</span>
                        <i className="fab fa-angular"></i>     
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>Redux</span>
                        <i className='bx bxl-redux'></i> 
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>Bootstrap</span>
                        <i className="fab fa-bootstrap"></i>      
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>SASS</span>
                        <i className="fab fa-sass"></i>    
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>Node.js</span>
                        <i className="fab fa-node-js"></i>
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>Git</span>
                        <i className="fab fa-git"></i>   
                    </div>

                    <div className="aboutMe__DataTecP col-6 col-md-4">
                        <span>Firebase</span>
                        <i className='bx bxl-firebase' ></i>  
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default AboutMe;