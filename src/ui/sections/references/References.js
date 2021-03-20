import React from 'react';
import './references.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const References = () => {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return(

        <div className="references">

            <div className="references__Content">
                
                <Swiper
                    spaceBetween={16}
                    loop= {true}
                    grabCursor= {true}
                    pagination={{ el: '.swiper-pagination',clickable: true }}
                    breakpoints={{640:{slidesPerView:2}}}
                >
                    <SwiperSlide>

                        <div className="references__ContentData">

                            <img className="references__ContentDataImg" alt="Declaración" src="https://via.placeholder.com/500"></img>

                            <h3 className="references__ContentDataName">Maximiliano Russo</h3>

                            <span className="references__ContentDataClient">CEO Calzados Bebote</span>

                            <p className="references__ContentDataText">"Eficiencia y profesionalidad en su forma de trabajar, muy conforme con los resultados"</p>
                    
                        </div>

                    </SwiperSlide>
                    
                    <SwiperSlide>

                        <div className="references__ContentData">

                            <img className="references__ContentDataImg" alt="Declaración" src="https://via.placeholder.com/500"></img>

                            <h3 className="references__ContentDataName">Gastón Russo</h3>

                            <span className="references__ContentDataClient">Gerente financiero Calzados Bebote</span>

                            <p className="references__ContentDataText">"Muy buena experiencia por la organización con la que realiza todas las entregas del proyecto"</p>
                        
                        </div>

                    </SwiperSlide>
                  
                </Swiper>

                <div className="swiper-pagination"></div>

            </div>

        </div>
    )
}

export default References;