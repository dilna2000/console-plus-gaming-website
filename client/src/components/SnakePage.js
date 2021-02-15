import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import axios from 'axios';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, snakeArr, isIn, uid} from './Header';

var snakeArr2 = [];
var exname2 = 'Guest';
var us_id = localStorage.getItem('u_id');
const SnakePage = () => {
    const usersn = () => {
        axios.get('https://console-plus.herokuapp.com/gamers/fetch3/' + us_id)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on ticpage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on ticpage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    snakeArr2 = response.data.snakegame;
                    console.log("New Snake Array: ", snakeArr2);
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
    console.log("Name on SnakePage: ", exname);
    console.log("Array on Snakepage: ", snakeArr);
    let val = snakeArr2.length;
    console.log("Length is: ")
    const [login, setLogin] = useState(false);
    const onCloseLogin = () => {
        setLogin(false);
    };
    const onOpenLogin = () => {
        setLogin(true);
    };
    
     
        return (
            <div className='snake' >
                <div className='snake-main-img' >
           
           <div className=" snake-main-content" >
               <div className="container">
               <div className="text-center">
           <h1 className="chess-chess  " style={{paddingTop:'180px'}}>The Serpent Quest</h1>  
           <div className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
           <Link to='/snake-game-online' > <button className='snake-main-play' > Play</button> </Link>
           </div>

           <div  className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
               
               <button onClick={onOpenLogin}  className="snake-main-track">Track your Points! </button> 
           </div>
           </div>
                        </div>
                        <div className="chess-note text-center">
                            <p> <i style={{ color: 'darkred' }} className="sticky note outline icon"> </i> This game is not mobile-friendly yet! </p>
                        </div>
       </div>
   
       </div>


                    
                    <Modal  open={login} onClose={onCloseLogin} styles={bg}>
                        
                        <div>
                            {isIn ?
                            <div>
                                <h4 className=" chess-modal-data">Your Scores</h4>
                                <Chart
                                    title="Data of Last 5 Games"
                                    dataSource={[{
                                        arg: 'Older',
                                        val: snakeArr2[val - 5]
                                    }, {
                                        arg: 'Old',
                                        val: snakeArr2[val - 4]
                                    }, {
                                        arg: 'New',
                                        val: snakeArr2[val - 3]
                                    }, {
                                        arg: 'Newer',
                                        val: snakeArr2[val - 2]
                                    }, {
                                        arg: 'Newest',
                                        val: snakeArr2[val - 1]
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

export default SnakePage;