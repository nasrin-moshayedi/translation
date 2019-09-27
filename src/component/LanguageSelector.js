import React from 'react';
import LanguageStore from "./../context/LanguageContext";

class LanguageSelector extends React.Component {
    static contextType = LanguageStore;

    render() {
        return(
        <div>
            Select a language: 
            <i className="flag us" onClick={() => this.context.onChangeLanguage('english')}/>
            <i className="flag nl" onClick={() => this.context.onChangeLanguage('dutch')}/>
         </div>
        )
    }
}

export default LanguageSelector;