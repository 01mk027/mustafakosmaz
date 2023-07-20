import React from 'react';
import ProjectsStyles from './Projects.module.css';
import LanguageContext from '../context/LanguageContext';
import parse from "html-react-parser"

function Projects()
{
    const {language, setLanguage} = React.useContext(LanguageContext);
    return(
        <div className={`${ProjectsStyles.mainDivOfProjects}`}>
            <div className={`${ProjectsStyles.generalFrame}`}>
                
                    <div className={`${ProjectsStyles.projectIntro}`}>
                        <div className={`row text-center`}>
                            <p className={`${ProjectsStyles.meanfulQuote}`}><i>{language.Projects.meanfulQuote}</i></p>
                        </div>
                    </div>
                {language.Projects.projectItems.map(item =>
                <div className={`${ProjectsStyles.projectFrame}`}>
                
                    <div className={`row`}>
                        <div className={`col-3 mx-2`}><h6>{item.projectTitleCaption}</h6></div>
                        <div className={`col-7`}><p>{parse(item.projectTitle)}</p></div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-3 mx-2`}><h6>{item.projectPurposeTitle}</h6></div>
                        <div className={`col-7`}><p>{item.projectPurpose}</p></div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-3 mx-2`}><h6>{item.projectDateTitle}</h6></div>
                        <div className={`col-7`}><p>{item.projectDate}</p></div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-3 mx-2`}><h6>{item.projectLinkTitle}</h6></div>
                        <div className={`col-7`}><a href={item.projectLink}>{item.clickHere}</a></div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-3 mx-2`}><h6>{item.projectDescriptionTitle}</h6></div>
                        <div className={`col-7`}><p>{parse(item.projectDescription)}</p></div>
                    </div>   
                </div>
                )}
            </div>
        </div>
    );
}

export default Projects;