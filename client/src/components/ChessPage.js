import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import axios from 'axios';
import chess from '../images/chess1.jpg';
import './ChessPage.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
    Title,Font
} from 'devextreme-react/chart';

import { exname, snakeArr, isIn, uid } from './Header';

var ChessArr = [];
var exname2 = 'Guest';
var us_id = localStorage.getItem('u_id');
const ChessPage = () => {
    const usersn = () => {
        axios.get('https://console-plus.herokuapp.com/gamers/fetch3/' + us_id)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on chesspage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on chesspage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    ChessArr = response.data.chess;
                    console.log("New Chess Array: ", ChessArr);
                    console.log('me');
                    //renderLogout();


                }
            })
            .catch(function (error) {
                console.log("error");
            });
    }
    const bg = {

        modal: {
            background: 'white',
            width:'50%',
            borderRadius:'10px'
        },
        closeButton: {
            color: '#383838'
        }
    };

    usersn();
    console.log("Name on Chess Page: ", exname);
    console.log("Array on Chess page: ", ChessArr);
    let val = ChessArr.length;
    console.log("Length is: ")
    const [login, setLogin] = useState(false);
    const onCloseLogin = () => {
        setLogin(false);
    };
    const onOpenLogin = () => {
        setLogin(true);
    };


    return (
        <div style={{width:'100%'}}>
            

            <div className='chess-main-img' >
           
                <div className=" chess-main-content" >
                    <div className="container">
                    <div className="text-center">
                <h1 className="chess-chess  " style={{paddingTop:'180px'}}>Chess </h1>  
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 chess-small-1" style={{textAlign:'center'}}>
                <Link to='/chess' > <button className='chess-main-play' > Play</button> </Link>
                </div>

                <div  className="col-12 col-sm-6 col-md-6 col-lg-6 chess-small-2" style={{textAlign:'center'}}>
                    
                    <button onClick={onOpenLogin}  className="chess-main-track">Track your Points! </button> 
                </div>
                </div>
                    </div>
                    <div className="break-note text-center">
                        <p> <i style={{ color: 'darkred' }} className="sticky note outline icon"> </i> This game is not mobile-friendly yet! </p>
                    </div>
            </div>
        
            </div>
             
           
                <Modal open={login} onClose={onCloseLogin} styles={bg} >
                   
                    <div>
                        {isIn ?
                        <div>
                         
                        <h4 className=" chess-modal-data">Your Scores</h4>
                            <Chart
                                
                                
                                dataSource={[{
                                    arg: 'Older',
                                    val: ChessArr[val - 5]
                                }, {
                                    arg: 'Old',
                                    val: ChessArr[val - 4]
                                }, {
                                    arg: 'New',
                                    val: ChessArr[val - 3]
                                }, {
                                    arg: 'Newer',
                                    val: ChessArr[val - 2]
                                }, {
                                    arg: 'Newest',
                                    val: ChessArr[val - 1]
                                }]}

                                id="chart"
                            >
                               
                                <ArgumentAxis tickInterval={10}>
                                    <Label format="decimal" />
                                </ArgumentAxis>

                                <Series
                                    type="line"
                                />

                                <Legend
                                    visible={false}
                                />

                            </Chart>
                            </div>
                            :
                            <div> Please login to see score! </div>}
                    </div>
                </Modal>
            
        </div>
    );

}

export default ChessPage;