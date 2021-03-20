import React, { useState, useEffect } from "react";
import { Provider } from "./contexto.js";
import mixitup from 'mixitup';

const CartContext = ({ children }) => {

  //FUNCIÓN ENCARGADA DE ACTIVAR O DESACTIVAR EL MENÚ
  const toggleMenu = () => {
        
    const menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle('activeMenu');

    const navegationToggle = document.querySelector('.navegation');
    navegationToggle.classList.toggle('activeNavegation');
  }

  //FUNCIÓN ENCARGADA DE CAMBIAR EL COLOR AL NAVBAR CON RESPECTO AL SCROLL
  const scrollHeader = () => {

    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const navegation = document.querySelector('.navegation');
    const menu = document.querySelector('.menu');

    let scroll = window.scrollY;

    let valHeader = header.classList.contains('header__Scroll');
    let valLogo = logo.classList.contains('logo__Scroll');
    let valNavegation = navegation.classList.contains('navegation__Scroll');
    let valMenu = menu.classList.contains('menu__Scroll');

    if(scroll >= 520){
      header.classList.add('header__Scroll');
      logo.classList.add('logo__Scroll');
      navegation.classList.add('navegation__Scroll');
      menu.classList.add('menu__Scroll');
    }else if((scroll <= 520 && ((valHeader == true)||(valLogo == true)||(valNavegation == true)||(valMenu == true)))){
      header.classList.remove('header__Scroll');
      logo.classList.remove('logo__Scroll');
      navegation.classList.remove('navegation__Scroll');
      menu.classList.remove('menu__Scroll');
    }

  }

  //FUNCIÓN ENCARGADA DE MOSTRAR EL SCROLLTOP
  const scrollTop = () => {

    const scrollTop = document.querySelector('.scrollTop');

    let scroll = window.scrollY;

    let val = scrollTop.classList.contains('scrollTop__Show');


    if(scroll >= 540){
      scrollTop.classList.add('scrollTop__Show');
    }else if(scroll<=540 && val == true){
      scrollTop.classList.remove('scrollTop__Show');
    }

  }

  //MIXITUP
  document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    const containerEl = document.querySelector('.projects');
    //FUNCIÓN ENCARGADA DEL MIXITUP
    const mixer = mixitup(containerEl, {
      selectors: {
        target: '.projects__Content'
      },
      animation: {
        duration: 400
      }
    });
  
  })
  

  
  return (
    //SE SIMULA EL ENVIO DEL OBJETO CON LOS PROYECTOS HECHOS MEDIANTE PROPS PARA CONSUMIR EL CONTEXTO (SE CONSUME EN LA MAIN Y EN PROYECTSCONTAINER)
    <Provider value={{ toggleMenu, scrollHeader, scrollTop}}>{children}</Provider>
    
  );
};

export default CartContext;