import React from 'react';
import LanguageContext from "../context/LanguageContext";
import ColorContext from "./../context/ColorContext";

class Button extends React.Component {
    renderSubmit(value) {
        return value === "english"? 'Submit' : 'Voorlegen'
    }


    render() {
        return (
            <ColorContext.Consumer >
            {(color) => 
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {this.renderSubmit}
                    </LanguageContext.Consumer>
                </button>
            }
                
            </ColorContext.Consumer>
      
        ) 
    }
}

export default Button; 