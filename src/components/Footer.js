import React from 'react';
import footerStyles from './Footer.module.css';
import Linkedin from '../socialMediaIcons/Linkedin.png';
import Github from '../socialMediaIcons/github.png';
import Instagram from '../socialMediaIcons/instagram.png'

function Footer()
{
    return(
    <div className={footerStyles.mainDivOfFooter}>    
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-3">
                <p className={footerStyles.myName}><b>Mustafa KOŞMAZ</b></p>
                <div className={`row ${footerStyles.socialMediaFrames}`}>
                    <div className={`col-4`}><a href="https://www.linkedin.com/in/neverrun"><img src={Linkedin} alt="Linkedin" className={footerStyles.socialIcon}/></a></div>
                    <div className={`col-4`}><a href="https://github.com/01mk027"><img src={Github} alt="Github" className={footerStyles.socialIcon}/></a></div>
                    <div className={`col-4`}><a href="https://www.instagram.com/never_run"><img src={Instagram} alt="Instagram" className={footerStyles.socialIcon}/></a></div>
                </div>
            
            </div>
        </footer>
    </div>
    )
}

export default Footer;