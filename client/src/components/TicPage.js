import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import './TicPage.css';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, ticArr, exmail, isIn, uid } from './Header';
import axios from 'axios';

var ticArr2 = [];
var exname2 = 'Guest';
var us_id = localStorage.getItem('u_id');
const TicPage = () => {

    const params = { username: 'log1' };

    const usert = () => {
        axios.get('https://console-plus.herokuapp.com/gamers/fetch3/' + us_id)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on ticpage", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on ticpage is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    ticArr2 = response.data.tictactoe;
                    console.log("New Tic Array: ", ticArr2);
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
    usert();
    console.log("Name on TicPage: ", exname);
    console.log("Array on Ticepage: ", ticArr2);
    let val = ticArr2.length;
    console.log("Length is: ", val);
    //let val2 = ticArr2.length;
    //console.log("Main length is: ", val2);
    const [login, setLogin] = useState(false);
    const onCloseLogin = () => {
        setLogin(false);
    };
    const onOpenLogin = () => {
        setLogin(true);
    };
    
     
        return (
            <div className='snake'>
           <div className='tic-main-img' >
           
           <div className=" tic-main-content" >
               <div className="container">
               <div className="text-center">
           <h1 className="chess-chess  " style={{paddingTop:'180px'}}>Tic Tac Toe</h1>  
           <div className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
           <Link to='/tictactoe' > <button className='tic-main-play' > Play</button> </Link>
           </div>

           <div  className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
               <button onClick={onOpenLogin}  className="tic-main-track">Track your Points! </button> 
           </div>
           </div>
                        </div>

                        <div className="break-note text-center">
                            <p> <i style={{ color: 'darkred' }} className="sticky note outline icon"> </i> This game is not mobile-friendly yet! </p>
                        </div>
       </div>
   
       </div>
                    <Modal open={login} onClose={onCloseLogin} styles={bg}>
                        
                        <div>
                            {isIn ?
                            <div>
                                <h4 className=" chess-modal-data">Your Scores</h4>
                                <Chart
                                    title="Data of Last 5 Games"
                                    dataSource={[{
                                        arg: 'Older',
                                        val: ticArr2[val - 5]
                                    }, {
                                            arg: 'Old',
                                            val: ticArr2[val - 4]
                                    }, {
                                            arg: 'New',
                                            val: ticArr2[val- 3]
                                    }, {
                                            arg: 'Newer',
                                            val: ticArr2[val - 2]
                                    }, {
                                            arg: 'Newest',
                                            val: ticArr2[val - 1]
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

export default TicPage;