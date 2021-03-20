import React, {useContext} from 'react';
import contexto from '../../../api/context/contexto'
import './header.scss';
import Navbar from '../../sections/navbar/Navbar'

const Header = () => {

  const {scrollHeader} = useContext(contexto);

  //SE AÑADE EL EVENTO SCROLL QUE EJECUTE LA FUNCIÓN ENCARGADA DE CAMBIAR EL COLOR DEL HEADER
  window.addEventListener('scroll', scrollHeader);

  return(

    <header className="header" id="header">

      <Navbar/>

    </header>
    

  )
}





export default Header;