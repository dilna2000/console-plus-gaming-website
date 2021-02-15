import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import axios from 'axios';
import './HangPage.css';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, snakeArr, isIn, uid, sessin, sessmail } from './Header';

var HangArr = [];
var exname2 = 'Guest';

var us_id = localStorage.getItem('u_id');
const HangPage = () => {
    const usersn = () => {
        axios.get('https://console-plus.herokuapp.com/gamers/fetch3/' + us_id)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on hangpage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on hangpage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    HangArr = response.data.hangman;
                    console.log("New Hang Array: ", HangArr);
                    console.log('me');
                    //renderLogout();
                    //console.log("Sessions: ", sessin, " ", sessmail);
                    

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
    //console.log("Sessions: ", sessin, " ", sessmail);

    var check = localStorage.getItem('inside');
    console.log("Hey: ", check);
    console.log("Name on HangPage: ", exname);
    console.log("Array on Hangpage: ", HangArr);
    let val = HangArr.length;
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
            <div className='hang-main-img' >
           
           <div className=" hang-main-content" >
               <div className="container">
               <div className="text-center">
           <h1 className="chess-chess  " style={{paddingTop:'180px'}}>HangMan</h1>  
           <div className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
           <Link to='/hangman' > <button className='hang-main-play' > Play</button> </Link>
           </div>

           <div  className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
               
               <button onClick={onOpenLogin}  className="hang-main-track">Track your Points! </button> 
           </div>
           </div>
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
                                    val: HangArr[val - 5]
                                }, {
                                    arg: 'Old',
                                    val: HangArr[val - 4]
                                }, {
                                    arg: 'New',
                                    val: HangArr[val - 3]
                                }, {
                                    arg: 'Newer',
                                    val: HangArr[val - 2]
                                }, {
                                    arg: 'Newest',
                                    val: HangArr[val - 1]
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

export default HangPage;