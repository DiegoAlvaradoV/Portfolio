import React, {useRef, useEffect} from 'react';
import './home.scss';
import { gsap } from "gsap";
import DiegoAlvaradoCV from '../../../assets/pdf/DiegoAlvaradoCV.pdf'


const Home = () => {

    const refImg = useRef(null);
    const refData = useRef(null);
    const refGreet = useRef(null);
    const refSocialF = useRef(null);
    const refSocialI = useRef(null);
    const refSocialT = useRef(null);
    const refSocialL = useRef(null);
    const refSocialG = useRef(null);

    useEffect(() => {
         
        gsap.from(refImg.current, {
            opacity: 0,
            duration: 2,
            delay: 0.5,
            x:60
        });

        gsap.from(refData.current, {
            opacity: 0,
            duration: 2,
            delay: 0.8,
            y:25
        });

        gsap.from(refGreet.current, {
            opacity: 0,
            duration: 2,
            delay: 1,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refSocialF.current, {
            opacity: 0,
            duration: 2,
            delay: 1.9,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refSocialI.current, {
            opacity: 0,
            duration: 2,
            delay: 2,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refSocialT.current, {
            opacity: 0,
            duration: 2,
            delay: 2.1,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refSocialL.current, {
            opacity: 0,
            duration: 2,
            delay: 2.2,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });

        gsap.from(refSocialG.current, {
            opacity: 0,
            duration: 2,
            delay: 2.3,
            y:25,
            ease:'expo.out',
            stagger: 0.2
        });
 
    }, []);

    return(
    
    <div className="home">

        <div className="home__Presentation" ref={refData}>

            <span className="home__Greeting" ref={refGreet}>Hola, mi nombre es</span>

            <h1 className="home__Name" ref={refGreet}>Diego Alvarado</h1>

            <span className="home__Profession" ref={refGreet}>Front End Web Developer</span>

            <a download="" href={DiegoAlvaradoCV} className="home__CV" ref={refGreet}>Descargar CV</a>

        </div>
        
        <div className="home__Social">
            
            <a href="https://www.facebook.com/DAV-Development-102994281880027" className="home__SocialIcon" ref={refSocialF} target="_blank">

                <i className="fab fa-facebook"></i>

            </a>
            
            <a href="https://www.instagram.com/DAV_Development/" className="home__SocialIcon" ref={refSocialI} target="_blank">
                
                <i className="fab fa-instagram"></i>
            
            </a>
            
            <a href="https://twitter.com/DAV_Development" className="home__SocialIcon" ref={refSocialT} target="_blank">
                
                <i className="fab fa-twitter"></i>
                
            </a>
            
            <a href="https://www.linkedin.com/in/diego-andres-alvarado-valle-832a70196/" className="home__SocialIcon" ref={refSocialL} target="_blank">
                
                <i className="fab fa-linkedin-in"></i>
            
            </a>
            
            <a href="https://github.com/DiegoAlvaradoV" className="home__SocialIcon" ref={refSocialG} target="_blank">
                
                <i className="fab fa-github"></i>
            
            </a>
        
        </div>

        <div className="home__ImgBox">

            <img src="https://i.ibb.co/xsPDHb5/ejem.jpg" className="home__Img" alt="Diego Alvarado" ref={refImg}></img>

        </div>

    </div>

    )

}


export default Home;