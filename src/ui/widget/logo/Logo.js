import React, {useRef,useEffect} from 'react';
import './logo.scss';
import { gsap } from "gsap";

const Logo = () => {

    const refLogo = useRef(null);

    useEffect(() => {
        
        gsap.from(refLogo.current, {
            opacity: 0,
            duration: 2,
            delay: 1.5,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });
 
    }, []);

    return(
        
        <a href="#" className="logo" ref={refLogo}>

            <img src="https://i.ibb.co/M1wCXHC/LOGO.png" className="logo__Img"></img>

        </a>
        
    )
}

export default Logo;