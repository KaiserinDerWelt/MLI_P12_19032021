import React from 'react';


class Welcome extends React.Component{
    render(){
        return(
            <>
            <div className="container welcomecontainer">
                <h1>Hello <a className="redTextWelcome">Thomas</a></h1>
                <p className="emojiText">Congratulations! You reached yesterday’s goal! 👏</p>
            </div>
            </>
        )
    }
}


export default Welcome;