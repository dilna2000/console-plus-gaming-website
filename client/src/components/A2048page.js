import React, { Component } from 'react';
import './SnakePage.css';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { SnakeChart } from './SnakeChart.js';
import axios from 'axios';
import './A2048page.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import { exname, snakeArr, isIn, uid } from './Header';

var Arr2048 = [];
var exname2 = 'Guest';
console.log(localStorage.getItem('u_id'));
var us_id = localStorage.getItem('u_id');
const A2048Page = () => {
    const usersn = () => {
        axios.get('https://console-plus.herokuapp.com/gamers/fetch3/' + us_id)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on 2048page", response.data);
                    //if ()
                    exname2 = response.data.username;
                    console.log("name on 2048page is: ", exname2);
                    //var exmail2 = response.data.email;
                    //snakeArr = response.data.snakegame;
                    Arr2048 = response.data.A2048;
                    console.log("New 2048 Array: ", Arr2048);
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
    console.log("Name on A2048Page: ", exname);
    console.log("Array on A2048page: ", Arr2048);
    let val = Arr2048.length;
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
           <div className='a2048-main-img' >
           
           <div className=" a2048-main-content" >
               <div className="container">
               <div className="text-center">
           <h1 className="chess-chess  " style={{paddingTop:'180px'}}>2048 </h1>  
           <div className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
           <Link to='/2048' > <button className='a2048-main-play' > Play</button> </Link>
           </div>

           <div  className="col-12 col-sm-6 col-md-6 col-lg-6" style={{textAlign:'center'}}>
               
               <button onClick={onOpenLogin}  className="a2048-main-track">Track your Points! </button> 
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
                                title="Data of Recent Games"
                                dataSource={[{
                                    arg: 'Older',
                                    val: Arr2048[val - 5]
                                }, {
                                    arg: 'Old',
                                    val: Arr2048[val - 4]
                                }, {
                                    arg: 'New',
                                    val: Arr2048[val - 3]
                                }, {
                                    arg: 'Newer',
                                    val: Arr2048[val - 2]
                                }, {
                                    arg: 'Newest',
                                    val: Arr2048[val - 1]
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

export default A2048Page;