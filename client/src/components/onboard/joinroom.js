import React from 'react'
import JoinGame from './joingame'
import ChessGame from '../chess/ui/chessgame'
import joinroom from './joinroom.css';


/**
 * Onboard is where we create the game room.
 */

class JoinRoom extends React.Component {
    state = {
        didGetUserName: false,
        inputText: ""
    }

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    typingUserName = () => {
        // grab the input text from the field from the DOM 
        const typedText = this.textArea.current.value
        
        // set the state with that text
        this.setState({
            inputText: typedText
        })
    }

    render() {
    
        return (
            <div className="chess-bg-bg">
            {
                this.state.didGetUserName ? 
                <React.Fragment>
                    <JoinGame userName = {this.state.inputText} isCreator = {false}/>
                    <ChessGame myUserName = {this.state.inputText}/>
                </React.Fragment>
            :
            <div className="container">
                            <div className="text-center">
             <h1  className="chess-title-title" style={{textAlign: "center",paddingTop:'130px'}}>Your Username:</h1>
             
             <input className=" chess-input"
                    ref = {this.textArea}
                    onInput = {this.typingUserName}></input>
             <div>  
                                    <button className="chess-submit" style={{ marginBottom: '300px' }}
                 
                 disabled = {!(this.state.inputText.length > 0)} 
                 onClick = {() => {
                     // When the 'Submit' button gets pressed from the username screen,
                     // We should send a request to the server to create a new room with
                     // the uuid we generate here.
                     this.setState({
                         didGetUserName: true
                     })
                 }}>Submit</button>
                 </div>
             </div>
         </div>
            }
            </div>
           )
    }
}

export default JoinRoom
