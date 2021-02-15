import React, { useState, useEffect } from "react";
import cloneDeep from "lodash.clonedeep";
import { useEvent, getColors } from "./util";
import Swipe from "react-easy-swipe";
import axios from 'axios';

import { exname, isIn, exmail } from './Header';


function A2048() {
    const UP_ARROW = 38;
    const DOWN_ARROW = 40;
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    

    const [data, setData] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);

    const [gameOver, setGameOver] = useState(false);

    // Initialize
    const initialize = () => {
        // console.log("CALLING INITIALIZE");

        let newGrid = cloneDeep(data);
        console.log(newGrid);

        addNumber(newGrid);
        console.table(newGrid);
        addNumber(newGrid);
        console.table(newGrid);
        setData(newGrid);
    };

    // AddNumber - Add an item
    const addNumber = (newGrid) => {
        let added = false;
        let gridFull = false;
        let attempts = 0;
        while (!added) {
            if (gridFull) {
                break;
            }

            let rand1 = Math.floor(Math.random() * 4);
            let rand2 = Math.floor(Math.random() * 4);
            attempts++;
            if (newGrid[rand1][rand2] === 0) {
                newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
                added = true;
            }
            if (attempts > 50) {
                gridFull = true;
                let gameOverr = checkIfGameOver();
                if (gameOverr) {
                    alert("game over");
                    // setGameOver(true);
                }
                // setGameOver(true);
                console.log("Attempts are: ", attempts);
            }
        }
    };
    // Swipe Left
    const swipeLeft = (dummy) => {
        console.log("swipe left");
        let oldGrid = data;
        let newArray = cloneDeep(data);

        for (let i = 0; i < 4; i++) {
            let b = newArray[i];
            let slow = 0;
            let fast = 1;
            while (slow < 4) {
                if (fast === 4) {
                    fast = slow + 1;
                    slow++;
                    continue;
                }
                if (b[slow] === 0 && b[fast] === 0) {
                    fast++;
                } else if (b[slow] === 0 && b[fast] !== 0) {
                    b[slow] = b[fast];
                    b[fast] = 0;
                    fast++;
                } else if (b[slow] !== 0 && b[fast] === 0) {
                    fast++;
                } else if (b[slow] !== 0 && b[fast] !== 0) {
                    if (b[slow] === b[fast]) {
                        b[slow] = b[slow] + b[fast];
                        b[fast] = 0;
                        fast = slow + 1;
                        slow++;
                    } else {
                        slow++;
                        fast = slow + 1;
                    }
                }
            }
        }
        if (JSON.stringify(oldGrid) !== JSON.stringify(newArray)) {
            addNumber(newArray);
        }
        if (dummy) {
            return newArray;
        } else {
            setData(newArray);
        }
    };

    const swipeRight = (dummy) => {
        console.log("swipe right");
        let oldData = data;
        let newArray = cloneDeep(data);

        for (let i = 3; i >= 0; i--) {
            let b = newArray[i];
            let slow = b.length - 1;
            let fast = slow - 1;
            while (slow > 0) {
                if (fast === -1) {
                    fast = slow - 1;
                    slow--;
                    continue;
                }
                if (b[slow] === 0 && b[fast] === 0) {
                    fast--;
                } else if (b[slow] === 0 && b[fast] !== 0) {
                    b[slow] = b[fast];
                    b[fast] = 0;
                    fast--;
                } else if (b[slow] !== 0 && b[fast] === 0) {
                    fast--;
                } else if (b[slow] !== 0 && b[fast] !== 0) {
                    if (b[slow] === b[fast]) {
                        b[slow] = b[slow] + b[fast];
                        b[fast] = 0;
                        fast = slow - 1;
                        slow--;
                    } else {
                        slow--;
                        fast = slow - 1;
                    }
                }
            }
        }
        if (JSON.stringify(newArray) !== JSON.stringify(oldData)) {
            addNumber(newArray);
        }
        if (dummy) {
            return newArray;
        } else {
            setData(newArray);
        }
    };

    const swipeDown = (dummy) => {
        console.log("swipe down");
        console.log(data);
        let b = cloneDeep(data);
        let oldData = JSON.parse(JSON.stringify(data));
        for (let i = 3; i >= 0; i--) {
            let slow = b.length - 1;
            let fast = slow - 1;
            while (slow > 0) {
                if (fast === -1) {
                    fast = slow - 1;
                    slow--;
                    continue;
                }
                if (b[slow][i] === 0 && b[fast][i] === 0) {
                    fast--;
                } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
                    b[slow][i] = b[fast][i];
                    b[fast][i] = 0;
                    fast--;
                } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
                    fast--;
                } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
                    if (b[slow][i] === b[fast][i]) {
                        b[slow][i] = b[slow][i] + b[fast][i];
                        b[fast][i] = 0;
                        fast = slow - 1;
                        slow--;
                    } else {
                        slow--;
                        fast = slow - 1;
                    }
                }
            }
        }
        if (JSON.stringify(b) !== JSON.stringify(oldData)) {
            addNumber(b);
        }
        if (dummy) {
            return b;
        } else {
            setData(b);
        }
    };

    const swipeUp = (dummy) => {
        console.log("swipe up");
        let b = cloneDeep(data);
        let oldData = JSON.parse(JSON.stringify(data));
        for (let i = 0; i < 4; i++) {
            let slow = 0;
            let fast = 1;
            while (slow < 4) {
                if (fast === 4) {
                    fast = slow + 1;
                    slow++;
                    continue;
                }
                if (b[slow][i] === 0 && b[fast][i] === 0) {
                    fast++;
                } else if (b[slow][i] === 0 && b[fast][i] !== 0) {
                    b[slow][i] = b[fast][i];
                    b[fast][i] = 0;
                    fast++;
                } else if (b[slow][i] !== 0 && b[fast][i] === 0) {
                    fast++;
                } else if (b[slow][i] !== 0 && b[fast][i] !== 0) {
                    if (b[slow][i] === b[fast][i]) {
                        b[slow][i] = b[slow][i] + b[fast][i];
                        b[fast][i] = 0;
                        fast = slow + 1;
                        slow++;
                    } else {
                        slow++;
                        fast = slow + 1;
                    }
                }
            }
        }
        if (JSON.stringify(oldData) !== JSON.stringify(b)) {
            addNumber(b);
        }
        if (dummy) {
            return b;
        } else {
            setData(b);
        }
    };

    // Check Gameover
    const checkIfGameOver = () => {
        
        console.log("CHECKING GAME OVER");
        // let original = cloneDeep(data);
        let checker = swipeLeft(true);
        console.log("CHECKER left");
        console.table(data);
        console.table(checker);

        if (JSON.stringify(data) !== JSON.stringify(checker)) {
            return false;
            
        }

        let checker2 = swipeDown(true);
        console.log("CHECKER DOWN");
        console.table(data);
        console.table(checker2);
        
        if (JSON.stringify(data) !== JSON.stringify(checker2)) {
            return false;
            
        }

        let checker3 = swipeRight(true);
        console.log("CHECKER Right");
        console.table(data);
        console.table(checker3);
        
        if (JSON.stringify(data) !== JSON.stringify(checker3)) {
            return false;
           
        }

        let checker4 = swipeUp(true);
        console.log("CHECKER up");
        console.table(data);
        console.table(checker4);
        if (JSON.stringify(data) !== JSON.stringify(checker4)) {
            return false;
            
        }

        return true;
        console.table(data);
        
        
    };
    // Reset
    const resetGame = () => {
        setGameOver(false);
        const emptyGrid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        addNumber(emptyGrid);
        addNumber(emptyGrid);
        setData(emptyGrid);
    };

    const handleKeyDown = (event) => {
        var county = 0;
        if (gameOver) {
            return;
        }
        switch (event.keyCode) {
            case UP_ARROW:
                // alert("up");
                // console.table(data);
                swipeUp();
                county = county + 1;
                console.log("up: ", county);
                // console.table(data);
                break;
            case DOWN_ARROW:
                // console.table(data);
                swipeDown();
                county = county + 1;
                console.log("down: ", county);
                // console.table(data);
                break;
            case LEFT_ARROW:
                // console.table(data);
                swipeLeft();
                county = county + 1;
                console.log("left: ", county);
                // console.table(data);
                break;
            case RIGHT_ARROW:
                // console.table(data);
                swipeRight();
                county = county + 1;
                console.log("right: ", county);
                // console.table(data);
                break;
            default:
                break;
        }

        let gameOverr = checkIfGameOver();
        if (gameOverr) {
            setGameOver(true);
            console.log("done: ", county);
            console.table(data);
            console.log("LOG: ", data);
            /*let array1, array2, array3, array4;

            array1 = data[0];
            array2 = data[1];
            array3 = data[2];
            array4 = data[3];*/
            var array1 = data[0];
            console.log(array1);
            var max1 = Math.max(...array1);
            console.log("array max: ", max1);
            var array2 = data[1];
            console.log(array1);
            var max2 = Math.max(...array2);
            console.log("array max: ", max2);
            var array3 = data[2];
            console.log(array3);
            var max3 = Math.max(...array3);
            console.log("array max: ", max3);
            var array4 = data[3];
            console.log(array4);
            var max4 = Math.max(...array4);
            console.log("array max: ", max4);
            var final = [];
            final.push(max1, max2, max3, max4);
            console.log(final);
            var maxscore = Math.max(...final);
            console.log("final array max: ", maxscore);
            if (isIn) {
                alert("Saving score! ");
                console.log(maxscore);
                const payload = {
                    "email": exmail,
                    "score": maxscore,
                }
                axios.put('https://console-plus.herokuapp.com/gamers/add2048', payload)
                    .then(function (response) {
                        if (response.status === 200) { console.log('done'); console.log(response); }
                    }).catch(function (error) {
                        console.log(error);
                        alert('Invalid action');
                    });
            }
            else {
                alert("Can only save score when logged in!");
            }



        }
    };

    useEffect(() => {
        initialize();
        // eslint-disable-next-line
    }, []);

    // This is a custom function
    useEvent("keydown", handleKeyDown);

    return (
        <div className="hangman-bg">
        <div className="A2048">
            <div style={{
                    width: 345,
                    margin: "auto",
                    marginTop: 0,}}
            >
                <div style={{ display: "block" }}>
                    <div
                        style={{
                            fontFamily: "sans-serif",
                            flex: 1,
                            fontWeight: "700",
                            fontSize: 60,
                            color: "#776e65",
                            opacity:'0'
                        }}
                    >
                        2048
          </div>
                    <div
                        style={{
                            flex: 1,
                            marginTop: "120px",
                        }}
                    >
                        <div className="text-center" onClick={resetGame} style={style.newGameButton}>
                            NEW GAME
            </div>
                    </div>
                </div>
                <div
                    style={{
                        background: "#AD9D8F",
                        width: "max-content",
                        height: "max-content",
                        margin: "auto",
                        padding: 5,
                        borderRadius: 5,
                        marginTop: 10,
                        position: "relative",
                    }}
                >
                    {gameOver && (
                        <div style={style.gameOverOverlay}>
                            <div>
                                <div
                                    style={{
                                        fontSize: 30,
                                        fontFamily: "sans-serif",
                                        fontWeight: "900",
                                        color: "#776E65",
                                    }}
                                >
                                    Game Over
                </div>
                                <div>
                                    <div
                                        style={{
                                            flex: 1,
                                            marginTop: "auto",
                                        }}
                                    >
                                        <div onClick={resetGame} style={style.tryAgainButton}>
                                            Try Again
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Swipe
                        onSwipeDown={() => {
                            swipeDown();
                        }}
                        onSwipeLeft={() => swipeLeft()}
                        onSwipeRight={() => swipeRight()}
                        onSwipeUp={() => swipeUp()}
                        style={{ overflowY: "hidden" }}
                    >
                        {data.map((row, oneIndex) => {
                            return (
                                <div style={{ display: "flex" }} key={oneIndex}>
                                    {row.map((digit, index) => (
                                        <Block num={digit} key={index} />
                                    ))}
                                </div>
                            );
                        })}
                    </Swipe>
                </div>

                <div className="text-center" style={{marginTop:'30px',backgroundColor:'#846f5b',borderRadius:'10px',padding:'20px'}} > 
                    <p class="game-explanation">
                        <b class="important">How to play:</b> Use your{" "}
                        <strong>arrow keys</strong> to move the tiles. When two tiles with
            the same number touch, they <strong>merge into one!</strong>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}

const Block = ({ num }) => {
    const { blockStyle } = style;

    return (
        <div
            style={{
                ...blockStyle,
                background: getColors(num),
                color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
            }}
        >
            {num !== 0 ? num : ""}
        </div>
    );
};

const style = {
    blockStyle: {
        height: 80,
        width: 80,
        background: "lightgray",
        margin: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 45,
        fontWeight: "800",
        color: "white",
    },
    newGameButton: {
        padding: 10,
        background: "#846F5B",
        color: "#F8F5F0",
        width:'40%',
        borderRadius: 7,
        fontWeight: "900",
        margin:'0 auto',
        
        marginBottom: "auto",
        cursor: "pointer",
    },
    tryAgainButton: {
        padding: 10,
        background: "#846F5B",
        color: "#F8F5F0",
        width: 80,
        borderRadius: 7,
        fontWeight: "900",
        cursor: "pointer",
        margin: "auto",
        marginTop: 20,
    },
    gameOverOverlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        borderRadius: 5,
        background: "rgba(238,228,218,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default A2048;