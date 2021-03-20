import react from 'react';
import './footer.scss'

const Footer = () => {

    return(

        <footer className="footer">
          
          <div className="footer__Description">

            <h1 className="footer__DescriptionTitle">Diego Alvarado</h1>

            <p className="footer__DescriptionText">Portfolio personal</p>

            <div className="footer__DescriptionSocial">

              <a href="https://www.facebook.com/DAV-Development-102994281880027" className="footer__DescriptionSocialLink" target="_blank">
                
                <i className="fab fa-facebook footer__DescriptionSocialLinkIcon"></i>

              </a>

              <a href="https://www.instagram.com/DAV_Development/" className="footer__DescriptionSocialLink" target="_blank">
                
                <i className="fab fa-instagram footer__DescriptionSocialLinkIcon"></i>

              </a>

              <a href="https://twitter.com/DAV_Development" className="footer__DescriptionSocialLink" target="_blank">
                
                <i className="fab fa-twitter footer__DescriptionSocialLinkIcon"></i>

              </a>

              <a href="https://www.linkedin.com/in/diego-andres-alvarado-valle-832a70196/" className="footer__DescriptionSocialLink" target="_blank">
                
                <i className="fab fa-linkedin-in footer__DescriptionSocialLinkIcon"></i>

              </a>

              <a href="https://github.com/DiegoAlvaradoV" className="footer__DescriptionSocialLink" target="_blank">
                
                <i className="fab fa-github footer__DescriptionSocialLinkIcon"></i>

              </a>

            </div>

            <p className="footer__DescriptionCopy">&#169; 2021 Diego Alvarado. All Rigths Reserved.</p>

          </div>
          
        </footer>
    )
}

export default Footer;