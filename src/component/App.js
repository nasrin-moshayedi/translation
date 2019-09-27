import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from "./LanguageSelector";
import LanguageContext, {LanguageStore} from "../context/LanguageContext";
import ColorContext from "./../context/ColorContext";

class App extends React.Component {

  render() {
  return (
    <div className="ui container">
            <LanguageStore onChangeLanguage={this.onChangeLanguage}>

      <LanguageSelector />
        <ColorContext.Provider value="green">
          <UserCreate />
        </ColorContext.Provider>
     </LanguageStore>
     
    </div>
  );
  }
}

export default App;
