import React from 'react'
import LanguageContext from '../context/LanguageContext';
import ServicesStyles from './Services.module.css';


function Services() {
    const { language, setLanguage } = React.useContext(LanguageContext);

    return (
        <div className={`${ServicesStyles.mainDivOfServices}`}>
            <div className={`${ServicesStyles.generalFrame}`}>
                <div className={`${ServicesStyles.missionVisionFrame} text-center`}>
                    <h1 className={`text-light my-2`}><u>{language.Services.missionVisionCaption}</u></h1>
                    <h3 className={`text-light my-2`}>{language.Services.missionVision}</h3>
                </div>

                <div className={`${ServicesStyles.providedServicesFrame} `}>
                    <div className={`row`}>
                        <h3 className={`text-center my-3`}><u>{language.Services.servicesCaption}</u></h3>
                    </div>
                    {language.Services.serviceItems.map(item =>
                    <div className={`container ${ServicesStyles.serviceItem}`} key={Math.floor(Math.random()*10e75)}>
                        <div className={`row`}>
                        <div className={`col ${ServicesStyles.serviceItemsContent}`}  key={Math.floor(Math.random()*10e75)}>
                            <h4 style={{marginTop:5}} key={Math.floor(Math.random()*10e75)}>{item.serviceItemCaption}</h4>
                            <h6>{item.serviceItemDescription}</h6>
                        </div>
                        <div className={`col ${ServicesStyles.usedTechCol}`} key={Math.floor(Math.random()*10e75)}>
                            <h4>{item.serviceItemUsedTechsCaption}</h4>
                            <ul>
                                {
                                    item.serviceItemUsedTechs.map(
                                        tech => 
                                        <li className={ServicesStyles.usedTech} key={Math.floor(Math.random()*10e75)}>
                                            <h6>{tech}</h6>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        </div>
                    </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Services;