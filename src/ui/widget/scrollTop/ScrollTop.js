import React, {useContext} from 'react';
import contexto from '../../../api/context/contexto';
import './scrollTop.scss';

const ScrollTop = () => {

    const {scrollTop} = useContext(contexto);

    //SE AÑADE EL EVENTO SCROLL QUE EJECUTE LA FUNCIÓN ENCARGADA DE MOSTRAR EL SCROLLTOP
    window.addEventListener('scroll', scrollTop);

    return(

        

        <a href="#" className="scrollTop">
            
            <i className="fas fa-chevron-up scrollTop__Icon"></i>

        </a>

    )
}

export default ScrollTop;