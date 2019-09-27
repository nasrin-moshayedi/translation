import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "./../context/ColorContext";

class App extends React.Component {
  state = {language: 'english'}

  onChangeLanguage = (language) => {
this.setState({language})
  }
  render() {
  return (
    <div className="ui container">
      <div>
        Select a language: 
        <i className="flag us" onClick={() => this.onChangeLanguage('english')}/>
        <i className="flag nl" onClick={() => this.onChangeLanguage('dutch')}/>
      </div>
      <LanguageContext.Provider value={this.state.language}>
        <ColorContext.Provider value="green">
          <UserCreate />
        </ColorContext.Provider>
     </LanguageContext.Provider>
     
    </div>
  );
  }
}

export default App;
