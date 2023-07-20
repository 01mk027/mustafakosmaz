import React from 'react';
import NotFoundStyles from './NotFound.module.css';
import NotFoundImg from '../images/notfound.jpg';
import LanguageContext from '../context/LanguageContext';


function NotFound()
{
    const {language, setLanguage} = React.useContext(LanguageContext);
    return(
        <div className={`${NotFoundStyles.mainDivOfNotFound}`}>
            <div className={`${NotFoundStyles.generalFrame}`}>
                <div className={`${NotFoundStyles.notFoundFrame} text-center row-fluid`}>
                    <img src={NotFoundImg} alt="Not Found" className={`${NotFoundStyles.notFoundImage}`}/>
                </div>

                <div className={`${NotFoundStyles.notFoundTextFrame} row-fluid`}>
                    <h6 className={`${NotFoundStyles.notFoundContent}`}>{language.NotFound.notFoundContent}</h6>
                </div>
            </div>
        </div>
    )
}

export default NotFound;