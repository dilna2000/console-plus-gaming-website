import React from 'react'
import { Redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ColorContext } from '../context/color-context';
import joinroom from './joinroom.css';
const socket = require('../connection/socket').socket

/**
 * Onboard is where we create the game room.
 */

class CreateNewGame extends React.Component {
    state = {
        didGetUserName: false,
        inputText: "",
        gameId: ""
    }

    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    send = () => {
        /**
         * This method should create a new room in the '/' namespace
         * with a unique identifier. 
         */
        const newGameRoomId = uuidv4()

        // set the state of this component with the gameId so that we can
        // redirect the user to that URL later. 
        this.setState({
            gameId: newGameRoomId
        })

        // emit an event to the server to create a new room 
        socket.emit('createNewGame', newGameRoomId)
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
        // !!! TODO: edit this later once you have bought your own domain. 

        return (
            <div className="chess-bg-bg">
            {
                this.state.didGetUserName ?

                    <Redirect to={"/game/" + this.state.gameId}><button className="btn btn-success" style={{ marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px" }}>Start Game</button></Redirect>

                    :
                    <div className="container">
                        <div className="text-center">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="chess-title-title" style={{textAlign: "center",paddingTop:'130px'}}>Your Username:</h1>

                            <input className="chess-input"
                                ref={this.textArea}
                                onInput={this.typingUserName}></input>
                            <div>
                                    <button className="chess-submit" style={{marginBottom: '300px'}}

                                    disabled={!(this.state.inputText.length > 0)}
                                    onClick={() => {
                                        // When the 'Submit' button gets pressed from the username screen,
                                        // We should send a request to the server to create a new room with
                                        // the uuid we generate here.
                                        this.props.didRedirect()
                                        this.props.setUserName(this.state.inputText)
                                        this.setState({
                                            didGetUserName: true
                                        })
                                        this.send()
                                    }}>Submit</button>
                            </div>
                        </div>



                    </div>
            }
            </div>
        )
    }
}

const Onboard = (props) => {
    const color = React.useContext(ColorContext)

    return <CreateNewGame didRedirect={color.playerDidRedirect} setUserName={props.setUserName} />
}


export default Onboard