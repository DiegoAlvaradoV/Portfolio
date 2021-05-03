import React from 'react';
import './qualification.scss';
import DesarrolloWebDiegoAlvarado from "../../../assets/pdf/DesarrolloWebDiegoAlvarado.pdf";
import JavascriptDiegoAlvarado from "../../../assets/pdf/JavascriptDiegoAlvarado.pdf";
import ReactJSDiegoAlvarado from "../../../assets/pdf/ReactJSDiegoAlvarado.pdf";
import CarreraFrontEndDiegoAlvarado from "../../../assets/pdf/CarreraFrontEndDiegoAlvarado.pdf";

const Qualification = () => {

    return(

        <div className="qualification row">
            
            <div className="qualification__Content col-12 col-sm-6">

                <h2 className="qualification__ContentTitle">
                    
                    <i className="fas fa-book"></i>
                    Estudios

                </h2>
                
                <div className="qualification__ContentData">

                    <div className="qualification__ContentDataInfo">

                        <h3 className="qualification__ContentDataInfoO">Analista de Sistemas</h3>

                        <div className="qualification__ContentDataInfoE">

                            <span className="qualification__ContentDataInfoET">
                                <i className="fas fa-university"></i>
                                Escuela Da Vinci
                            </span>

                            <span className="qualification__ContentDataInfoET">
                                <i className="far fa-calendar-alt"></i>
                                Actualidad
                            </span>

                        </div>

                    </div>

                    <a className="qualification__ContentDataCV" download="" href={CarreraFrontEndDiegoAlvarado}>
                        
                        <div className="qualification__ContentDataInfo">
                            
                            <h3 className="qualification__ContentDataInfoO">Carrera de Desarrollo Front End</h3>
                            
                            <div className="qualification__ContentDataInfoE">
                                
                                <span className="qualification__ContentDataInfoET">
                                    
                                    <i className='bx bxs-certification'></i>
                                    Coderhouse
                                
                                </span>
                                
                                <span className="qualification__ContentDataInfoET">
                                    
                                    <i className="far fa-calendar-alt"></i>
                                    14 de Agosto/2020 - 21 de Enero/2021
                                
                                </span>
                            
                            </div>
                        
                        </div>

                    </a>

                    <a className="qualification__ContentDataCV" download="" href={ReactJSDiegoAlvarado}>
                        
                        <div className="qualification__ContentDataInfo">
                            
                            <h3 className="qualification__ContentDataInfoO">ReactJs</h3>
                            
                            <div className="qualification__ContentDataInfoE">
                                
                                <span className="qualification__ContentDataInfoET">
                                    
                                    <i className='bx bxs-certification'></i>
                                    Coderhouse
                                
                                </span>
                                
                                <span className="qualification__ContentDataInfoET">
                                    
                                    <i className="far fa-calendar-alt"></i>
                                    24 de Noviembre/2020 - 21 de Enero/2021
                                
                                </span>
                            
                            </div>
                        
                        </div>

                    </a>
                    
                    <a className="qualification__ContentDataCV" download="" href={JavascriptDiegoAlvarado}>

                    <div className="qualification__ContentDataInfo">
                        
                        <h3 className="qualification__ContentDataInfoO">JavaScript</h3>
                        
                        <div className="qualification__ContentDataInfoE">
                            
                            <span className="qualification__ContentDataInfoET">
                                
                                <i className='bx bxs-certification'></i>
                                Coderhouse
                            
                            </span>
                            
                            <span className="qualification__ContentDataInfoET">
                                
                                <i className="far fa-calendar-alt"></i>
                                28 de Septiembre/2020 - 30 de Noviembre/2020

                            </span>
                        
                        </div>
                    
                    </div>

                    </a>
                    
                    <a className="qualification__ContentDataCV" download="" href={DesarrolloWebDiegoAlvarado}>
                        
                        <div className="qualification__ContentDataInfo">

                            <h3 className="qualification__ContentDataInfoO">Desarrollo Web</h3>

                            <div className="qualification__ContentDataInfoE">
                                
                                <span className="qualification__ContentDataInfoET">
                                    
                                    <i className='bx bxs-certification'></i> 
                                    Coderhouse
                            
                                </span>
                            
                                <span className="qualification__ContentDataInfoET">
                                
                                    <i className="far fa-calendar-alt"></i>
                                    14 de Agosto/2020 - 15 de Octubre/2020
                            
                                </span>
                            
                            </div>

                        </div>

                    </a>

                    <div className="qualification__ContentDataInfo">

                        <h3 className="qualification__ContentDataInfoO">Secundaria</h3>

                        <div className="qualification__ContentDataInfoE">

                            <span className="qualification__ContentDataInfoET">
                                <i className="fas fa-school"></i>
                                Colegio Argentino Árabe "Omar Bin Al Jattab"
                            </span>

                            <span className="qualification__ContentDataInfoET">
                                <i className="far fa-calendar-alt"></i>
                                Serie 2017
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="qualification__Content col-12 col-sm-6">

                <h2 className="qualification__ContentTitle">
                    
                    <i className="fas fa-briefcase"></i>
                    Experiencia Laboral

                </h2>
                
                <div className="qualification__ContentData">

                    <div className="qualification__ContentDataInfo">

                        <h3 className="qualification__ContentDataInfoO">Desarrollador de software</h3>

                        <div className="qualification__ContentDataInfoE">

                            <span className="qualification__ContentDataInfoET">
                                <i className="fas fa-code"></i>
                                QuickPass
                            </span>

                            <span className="qualification__ContentDataInfoET">
                                <i className="far fa-calendar-alt"></i>
                                Actualidad
                            </span>

                        </div>

                    </div>

                    <div className="qualification__ContentDataInfo">

                        <h3 className="qualification__ContentDataInfoO">Tutor Desarrollo Web</h3>

                        <div className="qualification__ContentDataInfoE">

                            <span className="qualification__ContentDataInfoET">
                                <i className="fas fa-code"></i>
                                Coderhouse
                            </span>

                            <span className="qualification__ContentDataInfoET">
                                <i className="far fa-calendar-alt"></i>
                                Actualidad
                            </span>

                        </div>

                    </div>
                    

                    <div className="qualification__ContentDataInfo">

                        <h3 className="qualification__ContentDataInfoO">Freelance Front End Web Developer</h3>

                        <div className="qualification__ContentDataInfoE">

                            <span className="qualification__ContentDataInfoET">
                                <i className="fas fa-code"></i>
                                Buenos Aires, Argentina
                            </span>

                            <span className="qualification__ContentDataInfoET">
                                <i className="far fa-calendar-alt"></i>
                                15 de Septiembre/2020 - 15 de Abril/2021
                            </span>

                        </div>

                    </div>

                    <div className="qualification__ContentDataInfo">

                        <h3 className="qualification__ContentDataInfoO">Data Entry</h3>

                        <div className="qualification__ContentDataInfoE">

                            <span className="qualification__ContentDataInfoET">
                                <i className='bx bxs-data' ></i>
                                AlvaSalud
                            </span>

                            <span className="qualification__ContentDataInfoET">
                                <i className="far fa-calendar-alt"></i>
                                10 de Marzo/2018 - 20 de Julio/2020
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Qualification;