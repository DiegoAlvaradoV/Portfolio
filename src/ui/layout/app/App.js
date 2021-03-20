import React from 'react';
import './app.scss'
import ScrollTop from '../../widget/scrollTop/ScrollTop'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import PortfolioContext from '../../../api/context/PortfolioContext'


const App = () => {

    return (

        <div>
            
            <PortfolioContext>
                
                <ScrollTop/>
                
                <Header/>
            
                <Main/>

            </PortfolioContext>
        
            <Footer/>

        </div>
    )
}

 
export default App;