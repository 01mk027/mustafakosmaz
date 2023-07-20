import React from 'react';
import Thesis from './Thesis'
import LanguageContext from '../context/LanguageContext';

function ThesisFrame()
{
    const {language, setLanguage} = React.useContext(LanguageContext); 

    return(
        <div>
            <Thesis/>
            <h1>{language.Thesis.description}</h1> 
        </div>
    )
}

export default ThesisFrame;