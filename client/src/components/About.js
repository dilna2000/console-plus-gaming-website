import React, { useState, useEffect } from 'react';
import './About.css';
import { exname, snakeArr, isIn, exmail, uid } from './Header';
import Modal from 'react-modal';
import axios from 'axios';
import ava from '../images/ava.png';
const About = () => {


    /*const user = () => {
        axios.get('http://localhost:5000/gamers/me', { headers: { 'token': localStorage.getItem('login_access_token') } })
            .then(function (response) {
                if (response.status === 200) {
                    console.log("response on about", response);
                    exname = response.data.username;
                    console.log("name on about is: ", exname);
                    exmail = response.data.email;
                    snakeArr = response.data.snakegame;
                    console.log("Array on about : ", snakeArr);
                    console.log('me in about');
                   
                    isIn = true;
                    console.log('isIn is', isIn);
                }
            })
            .catch(function (error) {
                console.log("Error is there lmao");
            });
    }
    user();*/
    var edit_name = localStorage.getItem('uname');
    var edit_mail = localStorage.getItem('umail');
    console.log("Name before: " + edit_name + " Email bfor: " + edit_mail);
    console.log("Name on About: ", exname);
    const [edit, setEdit] = useState(false);
    const [e_name, setEName] = useState('');

    const [e_email, setEEmail] = useState('');
    const onOpenEdit = () => {
        setEdit(true);
    };
    const onCloseEdit = () => {
        setEdit(false);
    };
    const onNameChange = (e) => {
        console.log(e.target.value);
        setEName(e.target.value);

    };
    console.log(isIn)
    const onEmailChange = (e) => {
        console.log(e.target.value);
        setEEmail(e.target.value);

    };

    function handleEdit() {

        const payload = {
            "username": exname,
            "email": exmail,
            "new_user": e_name,
            "new_mail": e_email

        }
        axios.put('http://localhost:5000/gamers/editprofile', payload)
            .then(function (response) {
                if (response.status === 200) {
                    console.log('done'); console.log(response);
                    edit_name = e_name;
                    edit_mail = e_email;
                }
            }).catch(function (error) {
                console.log(error);
                alert('Invalid action');
            });


        console.log("Name after: " + edit_name + " Email after: " + edit_mail);

        onCloseEdit();
    }

    function handleDelete() {
        console.log('in func');
       
        const dpayload = {
            "email": edit_mail
        }
        var ud_id = localStorage.getItem('u_id');
        axios.delete('https://console-plus.herokuapp.com/gamers/delete/' + ud_id)
            .then(function (response) {
                console.log('in');
                if (response.status === 200) {
                    console.log('deleted');
                    console.log(response);
                    localStorage.removeItem('login_access_token');
                    localStorage.removeItem('inside');
                    localStorage.removeItem('inside_bool');
                    localStorage.removeItem('uname');
                    localStorage.removeItem('umail');
                    localStorage.removeItem('u_id');
                   
                   
                    window.location.reload(false);
                }
            }).catch(function (error) {
                console.log('no del');
            });
       

    }

    return (
        <div>
            <Modal isOpen={edit} onRequestClose={onCloseEdit} style={{ overlay: { zIndex: '99', backgroundColor: '#b3b3b49f' }, content: { marginLeft: '35%', width: '30%', height: '75%' } }} >
                <center><h1> Edit Profile ! </h1></center><br />


                <div className="ui form">
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Edit Name</label>
                            <input type="text" placeholder="First Name" style={{ marginLeft: '22px' }} onChange={onNameChange} value={e_name} />
                        </div>

                    </div>
                    <div className="inline fields">
                        <div className="nine wide field">
                            <label>Edit Email</label>
                            <input type="text" placeholder="Email" style={{ marginLeft: '23px' }} onChange={onEmailChange} value={e_email} />
                        </div>
                    </div>

                    <br />
                    <div className="ui submit button" style={{ width: '30%', marginLeft: '35%', backgroundColor: ' darkcyan' }} onClick={handleEdit} >Change it! </div>
                </div>

            </Modal>
            <div className="size-about">
                <div className="bg-about">
                    <div className="container" >
                        <div className="row text-center">
                            <div class="col-xs-4 col-sm-2 col-md-2 col-lg-2 boxstyle-about">
                                <h1 style={{ textAlign: 'left' }}>About</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {isIn ?
                    <div>
                        <div className="container" >
                            <div className="row text-center about-greet"  >
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 about-hello"  >
                                    HELLO, {edit_name}
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 about-img" >
                                    <img src={ava} />
                                </div>
                            </div>
                        </div>
                        <div className="about-black">
                            <div className="container ">
                                <div className="row text-center detail-box" >
                                    <div className="about-heading">
                                        <p>MY DETAILS</p>
                                    </div>
                                    <div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12" style={{ paddingBottom: '40px' }} >
                                            <div className="about-name" style={{ paddingBottom: '10px' }} >
                                                <h3>Name :</h3>
                                            </div>
                                            <div className="about-name-box">
                                                <h4>{edit_name}</h4>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12" style={{ paddingBottom: '40px' }} >
                                            <div className="about-mail" style={{ paddingBottom: '10px' }} >
                                                <h3>Email :</h3>
                                            </div>
                                            <div className="about-mail-box">
                                                <h4>{edit_mail}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-delete" >
                                        <button onClick={handleDelete}>  <h1> Delete  </h1> </button>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="container" style={{ paddingBottom: '70px', paddingTop: '50px' }}>
                        <div className="text-center about-please">
                            <h1 >Please Log in to see your details !</h1>
                        </div>
                    </div>}

            
            </div>
        </div>
    );
};

export default About;
