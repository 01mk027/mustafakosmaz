import React from 'react';
import NavStyles from './NavBar.module.css';
import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import LanguageContext from '../context/LanguageContext';
import axios from 'axios';
import TurkishFlag from '../flagIcons/TurkishFlag.png'
import EnglishFlag from '../flagIcons/EnglishFlag.png'




function NavBar() {
  const { language, setLanguage } = React.useContext(LanguageContext);
  
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [colorTransitionClassName, setColorTransitionClassName] = React.useState(NavStyles.translateDark);
  const [isNavLinkClicked, setIsNavLinkClicked] = React.useState(false);
  const handleScroll = () => {
    const position = document.documentElement.scrollTop;
    setScrollPosition(position);
    if (position > 0) {
      setColorTransitionClassName(NavStyles.translateColor);
    }
    else {
      setColorTransitionClassName(NavStyles.translateDark);
    }
    console.log("Position == " + position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function Turkish() {
    axios.get('./contentInDifferentLanguages/TurkishContent.json').then(res => setLanguage(res.data)).catch(err => console.log(err));
  }

  function English() {
    axios.get('./contentInDifferentLanguages/EnglishContent.json').then(res => setLanguage(res.data)).catch(err => console.log(err));
  }

  const showClassname = event => {
    //console.log('className 👉️', event.currentTarget.className);
    //event.persist();
    if (event.currentTarget.classList.contains('show')) {
      event.currentTarget.classList.remove('show');
    }
    //if(!isDropdownButtonClicked)
    //setIsDropdownShown("collapse navbar-collapse");
  }

  const getParentsClassName = () => {
    if (document.getElementById('navbarSupportedContent').classList.contains('show')) {
      document.getElementById('navbarSupportedContent').classList.remove('show');
    }
  }
  return (
    <div className={NavStyles.mainDivOfNav}>
      <nav className={`navbar navbar-expand-lg ${colorTransitionClassName} fixed-top`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><i className={NavStyles.navItemText}><b>Neverrun</b></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className={`${NavStyles.navEncloser} col-10`} onClick={getParentsClassName}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" className={`nav-link ${NavStyles.navLink}`}>
                  <li className={`${NavStyles.navItem} nav-item`}>
                    <b className={NavStyles.navItemText}>{language.Navbar.mainPage}</b>
                  </li>
                </Link>


                <Link to="/about" className={`nav-link ${NavStyles.navLink}`}>
                  <li className={`${NavStyles.navLink} nav-item`}>
                    <b className={NavStyles.navItemText}>{language.Navbar.aboutMe}</b>
                  </li>
                </Link>


                <Link to="/projects" className={`nav-link ${NavStyles.navLink}`}>
                  <li className={`${NavStyles.navLink} nav-item`}>
                    <b className={NavStyles.navItemText}>{language.Navbar.projects}</b>
                  </li>
                </Link>

                <Link to="/services" className={`nav-link ${NavStyles.navLink}`}>
                  <li className={`${NavStyles.navLink} nav-item`}>
                    <b className={NavStyles.navItemText}>{language.Navbar.services}</b>
                  </li>
                </Link>
              </ul>

            </div>
            <div className={NavStyles.flagsFrame}>
              <div className={NavStyles.TrImgFrame}>
                <img src={TurkishFlag} alt="Türkçe" onClick={() => Turkish()} className={`${NavStyles.navIconImgTr} nav-link`} />
              </div>
              <div className={NavStyles.EnImgFrame}>
                <img src={EnglishFlag} alt="English" onClick={() => English()} className={`${NavStyles.navIconImgEn} nav-link`} />
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;