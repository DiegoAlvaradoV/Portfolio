import React, {useRef,useEffect,useContext} from 'react'
import './navegation.scss'
import { gsap } from "gsap";
import contexto from '../../../api/context/contexto'

const Navegation = () => {

    const {toggleMenu} = useContext(contexto);

    const refNavHome = useRef(null);
    const refNavAbout = useRef(null);
    const refNavQualification = useRef(null);
    const refNavServices = useRef(null);
    const refNavProjects = useRef(null);
    const refNavReferences = useRef(null);
    const refNavContact = useRef(null);
    

    useEffect(() => {
        
        gsap.from(refNavHome.current, {
            opacity: 0,
            duration: 2,
            delay: 1.6,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refNavAbout.current, {
            opacity: 0,
            duration: 2,
            delay: 1.7,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refNavQualification.current, {
            opacity: 0,
            duration: 2,
            delay: 1.8,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refNavServices.current, {
            opacity: 0,
            duration: 2,
            delay: 1.9,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refNavProjects.current, {
            opacity: 0,
            duration: 2,
            delay: 2,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refNavReferences.current, {
            opacity: 0,
            duration: 2,
            delay: 2.1,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refNavContact.current, {
            opacity: 0,
            duration: 2,
            delay: 2.2,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });
    }, []);

    return(

        <div className="navegation">

            <ul className="navegation__List">

                <li className="navegation__ListSection" ref={refNavHome}>
                    
                    <a href="#" onClick={toggleMenu} className="navegation__ListLink">Inicio</a>

                </li>

                <li className="navegation__ListSection" ref={refNavAbout}>
                    
                    <a href="#aboutMe" onClick={toggleMenu} className="navegation__ListLink">Acerca de mí</a>

                </li>

                <li className="navegation__ListSection" ref={refNavQualification}>
                    
                    <a href="#qualification" onClick={toggleMenu} className="navegation__ListLink">Calificaciones</a>

                </li>

                <li className="navegation__ListSection" ref={refNavServices}>
                    
                    <a href="#services" onClick={toggleMenu} className="navegation__ListLink">Servicios</a>

                </li>

                <li className="navegation__ListSection" ref={refNavProjects}>
                    
                    <a href="#projects" onClick={toggleMenu} className="navegation__ListLink">Proyectos</a>

                </li>

                <li className="navegation__ListSection" ref={refNavReferences}>
                    
                    <a href="#references" onClick={toggleMenu} className="navegation__ListLink">Referencias</a>

                </li>

                <li className="navegation__ListSection" ref={refNavContact}>
                    
                    <a href="#contact" onClick={toggleMenu} className="navegation__ListLink">Contacto</a>

                </li>

            </ul>

        </div>
    )
}

export default Navegation;