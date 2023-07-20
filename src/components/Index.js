import {React, useContext, useEffect, useState} from 'react'
import  LanguageContext  from '../context/LanguageContext'
import indexStyles from './Index.module.css';
import bulb from '../images/bulb.jpg';
import handshake from '../images/handshake.jpg';
import math from '../images/math.jpg';
import Tesla from '../images/Tesla.png'



function Index() {

  const [ypos, setYPos] = useState(0);
  const [showSub1, setShowSub1] = useState(false);
  const [showSub2, setShowSub2] = useState(false);
  const [showSub3, setShowSub3] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const [currentIndexContent, setCurrentIndexContent] = useState({});
  const {language, setLanguage} = useContext(LanguageContext);
  



  useEffect(() => {
    
    const handleScroll = event => {
      
      if(window.scrollY > 0 && window.scrollY <= 100)
      {
        setShowSub1(true);
        setShowArrow(false);
      }
      else if(window.scrollY > 350 && window.scrollY <= 500)
      {
        setShowSub2(true);
      }
      else if(window.scrollY >= 500 && window.scrollY <= 550)
      {
        setShowSub3(true);
      }
      else if(window.scrollY > 550 && window.scrollY <= 950)
      {
        setShowIntroduction(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  console.log(currentIndexContent);
  
  let bckClr = 'green';
  return (
    <div className={indexStyles.mainDivOfIndex}>
      <div className={indexStyles.teslaFrame}>
        <div className={indexStyles.teslaQuoteFrame}>
          <p className={indexStyles.teslaQuote}>{language.Index.teslaQuote}</p>
          
          
          <p className={indexStyles.teslaFullName}>{language.Index.teslaFullName}</p>
        </div>
      </div>
      <div className={indexStyles.afterTeslaFrame}>
        <img src={Tesla} alt="Tesla" className={indexStyles.Tesla}/>
        <p className={indexStyles.InMemoryOfTesla}>{language.Index.inMemoryOfTesla}</p>
      </div>
      <div className={`${indexStyles.secondFrame}`}>
        <div className={`${ indexStyles.secondFrameSub1Show}`}>
          <img src={bulb} className={indexStyles.secondFrameSub1Img}/>
          <p className={`text-center ${indexStyles.secondFrameSub1Txt}`}>{language.Index.showSub1}</p>
        </div>

        <div className={`${ indexStyles.secondFrameSub1Show}`}>
          <img src={handshake} className={indexStyles.secondFrameSub1Img}/>
          <p className={`text-center ${indexStyles.secondFrameSub1Txt}`}>{language.Index.showSub2}</p>
        </div>

        <div className={`${ indexStyles.secondFrameSub1Show}`}>
          <img src={math} className={indexStyles.secondFrameSub1Img}/>
          <p className={`text-center ${indexStyles.secondFrameSub1Txt}`}>{language.Index.showSub3}</p>
        </div>

        <div className={indexStyles.introduction}>
          <div className={indexStyles.introductionCaption}>
              <h3 className={indexStyles.introductionCaption}>{language.Index.introductionCaption}</h3>
          </div>
          <div className={indexStyles.introductionTextFrame}>
            <p className={indexStyles.introductionText}>{language.Index.introductionText}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Index
