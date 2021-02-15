import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import axios from 'axios';
import './BrickPage.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, snakeArr, isIn, uid } from './Header';

var  BrickArr = [];
var exname2 = 'Guest';
var us_id = localStorage.getItem('u_id');
const BrickPage = () => {
    const usersn = () => {
        axios.get('https://console-plus.herokuapp.com/gamers/fetch3/' + us_id)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on brickpage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on brickpage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    BrickArr = response.data.brickbreak;
                    console.log("New brick Array: ", BrickArr);
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
    console.log("Name on Brick Page: ", exname);
    console.log("Array on Brick page: ", BrickArr);
    let val = BrickArr.length;
    console.log("Length is: ")
    const [login, setLogin] = useState(false);
    const onCloseLogin = () => {
        setLogin(false);
    };
    const onOpenLogin = () => {
        setLogin(true);
    };


    return (
        <div className='snake'>
            <div className='break-main-img' >
           
           <div className=" break-main-content" >
               <div className="container">
               <div className="text-center">
           <h1 className="chess-chess  " style={{paddingTop:'180px'}}>Breakout</h1>  
           <div className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
           <Link to='/breakout' > <button className='break-main-play' > Play</button> </Link>
           </div>

           <div  className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
               
               <button onClick={onOpenLogin}  className="break-main-track">Track your Points! </button> 
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="break-note1 text-center">
                        <p> <i style={{ color: 'red' }} className="sticky note outline icon"> </i> This game is not mobile-friendly yet! </p>
                    </div>
       </div>
   
       </div>


                <Modal open={login} onClose={onCloseLogin} styles={bg} >
                    
                    <div>
                        {isIn ?
                        <div>
                            <h4 className=" chess-modal-data">Your Scores</h4>
                            <Chart
                                title="Data of Last 5 Games"
                                dataSource={[{
                                    arg: 'Older',
                                    val: BrickArr[val - 5]
                                }, {
                                    arg: 'Old',
                                    val: BrickArr[val - 4]
                                }, {
                                    arg: 'New',
                                    val: BrickArr[val - 3]
                                }, {
                                    arg: 'Newer',
                                    val: BrickArr[val - 2]
                                }, {
                                    arg: 'Newest',
                                    val: BrickArr[val - 1]
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

export default BrickPage;