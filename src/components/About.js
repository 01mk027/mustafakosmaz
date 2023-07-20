import React from 'react'
import LanguageContext from '../context/LanguageContext'
import AboutStyles from './About.module.css';
import cvRes from '../images/cvres.jpg'
import MyThesis from './MyThesis';


function About() {

  

  const { language, setLanguage } = React.useContext(LanguageContext);





  return (
    <div className={AboutStyles.mainDivOfAbout}>
      <div className={`${AboutStyles.generalFrame}`}>


        <div className={`${AboutStyles.generalInformation}`}>
          <div className={`${AboutStyles.generalInformationTextContent}`}>
            <div className={`row text-center my-4`}>
              <h3><u>{language.About.generalInformation.generalInformationCaption}</u></h3>
            </div>
            <div className={`container ${AboutStyles.innerGenInfFrame}`}>
            <div className={`row ${AboutStyles.myName}`}>
                  <h2>{language.About.generalInformation.fullName}</h2>
            </div>
              <div className={`row`}>              
                <div className={`col-4`}>
                    <b>{language.About.generalInformation.birthDateCaption}</b>
                    <p>{language.About.generalInformation.birthDate}</p>
                    <b>{language.About.generalInformation.birthPlaceCaption}</b>
                    <p>{language.About.generalInformation.birthPlace}</p>
                </div>  
                <div className={`col-5`}>
                    <b>{language.About.generalInformation.nationalityCaption}</b>
                    <p>{language.About.generalInformation.nationality}</p>
                    <b>{language.About.generalInformation.militaryStatusCaption}</b>
                    <p>{language.About.generalInformation.militaryStatus}</p>
                </div>
                <div className={`col-3`}>
                  <img src={cvRes} alt="My picture" className={`img-fluid ${AboutStyles.cvRes} align-items-center p-0 m-0`} />
                </div>
              </div>
              <div className={`row ${AboutStyles.email}`}>
                  <b>{language.About.generalInformation.emailCaption}</b>
                  <p>{language.About.generalInformation.email}</p>
                  <b>{language.About.generalInformation.summaryCaption}</b>
                  <p>{language.About.generalInformation.summary}</p>
              </div>
            </div>
          </div>

        </div>



        <div className={`${AboutStyles.workExperience}`}>
          <div className={`row text-center my-4`}>
            <h3><u>{language.About.generalInformation.workingExperienceCaption}</u></h3>
          </div>


          {
            language.About.workingExperience.map(item =>
              <div className={`container text-left ${AboutStyles.setWorkExpBckClr}`} key={Math.floor(Math.random() * 10e75)}>
                <div className="row">
                  <div className="col">
                    <div className={`row`}>
                      <b><u>{item.firmNameCaption}</u></b>
                    </div>
                    <div className={`row`}>
                      <p>{item.firmName}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className={`row`}>
                      <b><u>{item.workingDateIntervalCaption}</u></b>
                    </div>
                    <div className={`row`}>
                      <p>{item.workingDateInterval}</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className={`row`}>
                      <b><u>{item.usedTechnologiesCaption}</u></b>
                    </div>
                    <div className={`row`}>
                      <ul className={`${AboutStyles.usedTechnologies}`}>
                        {item.usedTechnologies.map(usedTech =>
                          <li key={Math.floor(Math.random() * 10e75)}>{usedTech}</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`container text-center`}>
                  <div className="row">
                    <div className={`row text-left`}>
                      <b><u>{item.descriptionCaption}</u></b>
                    </div>
                    <div className={`col text-left`}>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            )}




        </div>

        <div className={AboutStyles.schoolFrame}>
          <div className={`row text-center my-4`}>
            <h3><u>{language.About.education.educationCaption}</u></h3>
          </div>
        {language.About.education.educationalInformation.map((edItem) =>
          <div className={`container my-3`}>
            <div className={`row`} key={Math.floor(Math.random() * 10e75)}>
              <div className={`col`}>
                <div className={`row-fluid`}>
                <b>{edItem.universityNameCaption}</b>
                <p>{edItem.universityName}</p>
                <b>{edItem.facultyCaption}</b>
                <p>{edItem.faculty}</p>
                <b>{edItem.startFinishDateCaption}</b>
                <p>{edItem.startFinishDate}</p>
                </div>
              </div>
              <div className={`col`}>
              <div className={`row-fluid`}>
                <b>{edItem.departmentCaption}</b>
                <p>{edItem.department}</p>
                <b>{edItem.gradeCaption}</b>
                <p>{edItem.grade}</p>
                </div>
              </div>
              <div className={`col ${AboutStyles.imgFrame}`}>
                <img src={edItem.imgSrc} alt="Çukurova Üniversitesi" className={`img-fluid ${AboutStyles.uniLogo}`}/>
              </div>
            </div>
            
          </div>
          )}
        </div>

        <div className={`${AboutStyles.foreignLanguage}`}>
          <div className={`row-fluid text-center my-4`}>
            <h3><u>{language.About.foreignLanguage.foreignLanguageCaption}</u></h3>
          </div>
          <div className={`container`}>
            { language.About.foreignLanguage.foreignLanguageItems.map(item =>
            <div className={`row`} key={Math.floor(Math.random() * 10e75)}>
              
                <div className={`col`} style={{marginBottom:'18px'}}>
                  <h5>{item.language}</h5>
                </div>
                <div className={`col`}>
                  <p>{item.grade}</p>
                </div>
            </div>
            )}
            <div className={`row`}>
              <h6>* {language.About.foreignLanguage.foreignLanguageNote}</h6>
            </div>
          </div>
        </div>

        
        <div className={`${AboutStyles.programmingSkills}`}>
          <div className={`row-fluid text-center my-4`}>
              <h3><u>{language.About.programmingSkills.programmingSkillsCaption}</u></h3>
          </div>        
          <div className={`row`}>
            <div className={`col`}>
              <ul className={`${AboutStyles.programmingSkillsFrame}`}>
              {
                language.About.programmingSkills.programmingSkillItems.map( item => 
                  <li key={Math.floor(Math.random() * 10e32)}>{item}</li>
                )}
              </ul>
              </div>
          </div>
        </div>      


  


        


      </div>
    </div>
  )
}

export default About
