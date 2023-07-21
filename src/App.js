import { useState, useEffect, React} from 'react';
import  Context  from './context/Context';
import  LanguageContext  from './context/LanguageContext';
import Index from './components/Index';
import AnimatedIntro from './components/AnimatedIntro';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import NotFound from './components/NotFound';
import { Helmet, HelmetProvider } from "react-helmet-async";



function App() {
  const [isShown, setIsShown] = useState(true);
  const [language, setLanguage] = useState({});

  useEffect(() =>{
    axios.get('./contentInDifferentLanguages/TurkishContent.json').then(res => setLanguage(res.data)).catch(err => console.log(err));
  },[]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIsShown(false)
    }, 6500)
    
    return () => clearInterval(timer)
  }, [])
  if(isShown == false) console.log("In App.js " + isShown);
  return (
    
        <Context.Provider value={{isShown, setIsShown}}>
          <LanguageContext.Provider value={{language, setLanguage}}>
          {isShown ? <AnimatedIntro/> : (
          <>
          <Router>
          <HelmetProvider>  
          <Helmet>
            <title>Mustafa KOŞMAZ</title>
            <meta
              name="description"
              content="Get information about Mustafa KOŞMAZ"
            />
            <meta
              name="keywords"
              content="mustafa koşmaz, mustafa, koşmaz, programming, java, nodejs, reactjs"
            />
          </Helmet>
          </HelmetProvider>  

          <NavBar/>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route  path="/about" element={<About />} />
              <Route  path='/projects' element={<Projects/>}/>
              <Route  path='/services' element={<Services/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
          </Router>
          
          </>)}
          </LanguageContext.Provider>
        </Context.Provider>
    
  );
}

export default App;
