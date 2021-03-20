import React, {useRef,useEffect,useContext} from 'react';
import './menu.scss'
import { gsap } from "gsap";
import contexto from '../../../api/context/contexto'

const Menu = () => {

    const {toggleMenu} = useContext(contexto);

    const refMenu = useRef(null);

    useEffect(() => {
        
        gsap.from(refMenu.current, {
            opacity: 0,
            duration: 2,
            delay: 1.5,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });
 
    }, []);

    return(

        <div className="menu" ref={refMenu}>
            
            <i className="fas fa-bars menu__Open" onClick={toggleMenu}></i>

            <i className="fas fa-times menu__Close" onClick={toggleMenu}></i>
        
        </div>

    )
}

export default Menu;