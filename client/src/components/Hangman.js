import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';

import step0 from "./himages/0.jpg";
import step1 from "./himages/1.jpg";
import step2 from "./himages/2.jpg";
import step3 from "./himages/3.jpg";
import step4 from "./himages/4.jpg";
import step5 from "./himages/5.jpg";
import step6 from "./himages/6.jpg";
import { exname, isIn, exmail } from './Header';
import axios from 'axios';
var res = 0;

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [step0, step1, step2, step3, step4, step5, step6]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        }
    }

    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }));
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                class='btn btn-lg btn-primary m-2'
                key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ));
    }

    resetButton = () => {
        this.setState({
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        });
    }

    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameStat = this.generateButtons();

        if (isWinner) {
            res = 1;
            if (isIn) {
                gameStat = "You Won!!! :D Saving score to database!";
                //alert("Game Over! Saving score.. Press ok to restart");
                console.log(res);
                const payload = {
                    "email": exmail,
                    "score": res,
                }
                axios.put('https://console-plus.herokuapp.com/gamers/addhangman', payload)
                    .then(function (response) {
                        if (response.status === 200) { console.log('done'); console.log(response); }
                    }).catch(function (error) {
                        console.log(error);
                        alert('Invalid action');
                    });
            }
            else {
                gameStat="You Won, but couldn't save your score as you were not logged in!"
            }


        }

        if (gameOver) {
            res = 0;
            if (isIn) {
                gameStat = "You Lost! :( Saving score to database!";
                //alert("Game Over! Saving score.. Press ok to restart");
                console.log(res);
                const payload = {
                    "email": exmail,
                    "score": res,
                }
                axios.put('https://console-plus.herokuapp.com/gamers/addhangman', payload)
                    .then(function (response) {
                        if (response.status === 200) { console.log('done'); console.log(response); }
                    }).catch(function (error) {
                        console.log(error);
                        alert('Invalid action');
                    });
            }
            else {
                gameStat = "You Lost, but couldn't save your score as you were not logged in!"
            }
        }

        return (
            <div className="hangman-bg">
            <div className="Hangman container">
                <h1 className='text-center' style={{opacity:'0',paddingTop:'50px'}}>Hangman</h1>
                <div className="text-center"  style={{paddingTop:'50px',color:'white',fontWeight:'bold'}}>Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
                <div className="text-center">
                    <img src={this.props.images[this.state.mistake]} alt="" />
                </div>
                <div className="text-center">
                    <p style={{color:'white',fontWeight:'bold'}}>Guess the Programming Language:</p>
                    <p style={{color:'white',fontWeight:'bold'}}>
                        {!gameOver ? this.guessedWord() : this.state.answer}
                    </p>
                    <p style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>{gameStat}</p>
                    <button className='btn btn-info' onClick={this.resetButton} style={{marginBottom:'30px'}}>Reset</button>
                    
                </div>
            </div>
            </div>
        )
    }
}

export default Hangman;