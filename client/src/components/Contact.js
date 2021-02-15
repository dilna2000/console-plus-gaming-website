import React, { useState, useEffect } from 'react';
import './Contact.css';
import axios from 'axios';
import Logo from '../images/logo12345.png';

const Contact = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [number, setNumber] = useState('');

    const [desc, setDesc] = useState('');

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);

    };

    const onEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

    };

    const onNumberChange = (e) => {
        console.log(e.target.value);
        setNumber(e.target.value);

    };

    const onDescChange = (e) => {
        console.log(e.target.value);
        setDesc(e.target.value);

    };

    const onNameSub = (e) => {

        setName('');

    };

    const onEmailSub = (e) => {
        //console.log(e.target.value);
        setEmail('');

    };

    const onNumberSub = (e) => {
        //console.log(e.target.value);
        setNumber('');

    };

    const onDescSub = (e) => {
        //console.log(e.target.value);
        setDesc('');

    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById('cname').value == '') {
            alert('Name cannot be empty')
        }

        if (document.getElementById('cmail').value == '') {
            alert('Mail cannot be empty')
        }

        if (document.getElementById('cnum').value == '') {
            alert('Contact Number cannot be empty')
        }

        if (document.getElementById('contact-form-feedback').value == '') {
            alert('Please write something')
        }

        if (document.getElementById('cnum').value.length != 10) {
            alert('Number length should be 10!')
        }

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!document.getElementById('cmail').value.match(mailformat)) {
            alert('Please enter proper email!');
        }
        else {
            const feedback = {
                name: name,
                email: email,
                number: number,
                desc: desc
            }

            console.log(feedback);
            axios.post('https://console-plus.herokuapp.com/feedbacks/addfeedback', feedback)
                .then(res => {
                    console.log(res.data)
                    alert('Feedback Submitted!');
                    onNameSub();
                    onEmailSub();
                    onNumberSub();
                    onDescSub();


                });
        }


    }
    return (
        <div className="size-contact">
            <div className="bg-contact">
                <div className="container" >
                    <div className="row text-center">
                        <div class="col-xs-4 col-sm-2 col-md-2 col-lg-2 boxstyle-contact">
                            <h1 style={{ textAlign: 'left' }}>Contacts</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center contact-section">
                    <div class="col-12 col-sm-4 col-md-4 col-lg-4 contact-margin">
                        <div className="contact-fonts" style={{ textAlign: 'left' }}>
                            <a class="mb-50 d-block"><img src={Logo} alt=""  width="70%"  style={{marginBottom:'90px'}}/></a>
                            <p style={{ lineHeight: '30px' }}> A portal not only for gamers and developers, but for everyone who wants a break from their busy schedule! </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4 col-lg-4 contact-margin">
                        <div className="contact-fonts" style={{ textAlign: 'left' }}>
                            <p style={{ lineHeight: '30px' }}> By looking at how the pandemic has affected us, it is really important for everyone to open up and share what they are cooking up in thier mind. And we as responsible developers would love to hear from our users any of their suggestions, compliments.</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4 col-lg-4 contact-margin">
                        <div className="contact-fonts">
                            
                            <div style={{ textAlign: 'left' }}>
                                <div className="contact-title contact-title-btn">
                                    <p style={{ lineHeight: '35px' }}>Phone No</p>
                                </div>
                                <div className="contact-title">
                                    <p>&nbsp;3442342341</p>
                                </div>
                            </div><br />
                            <div style={{ textAlign: 'left' }}>
                                <div className="contact-title contact-title-btn">
                                    <p style={{ lineHeight: '35px' }}>Email ID</p>
                                </div>
                                <div className="contact-title">
                                    <p>&nbsp;ammudilna2000@g</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-black">
                <div className="container">
                    <div className="row text-center" style={{ margin: '30px' }}>
                        <div className="contact-form-heading">
                            <p>Get In Touch</p>
                        </div>
                        <div>
                            <form>
                                <div className="col-12 col-sm-6 col-md-5 col-lg-6" >
                                    <input placeholder="Name" className="contact-form-input" onChange={onNameChange} required id='cname' value={name} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6" >
                                    <input placeholder="Email" className="contact-form-input" onChange={onEmailChange} required id='cmail' value={email} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input placeholder="Contact No" className="contact-form-input" onChange={onNumberChange} required id='cnum' value={number} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                                    <input placeholder="Feedback" className="contact-form-input" id="contact-form-feedback" required onChange={onDescChange} value={desc} />
                                </div>
                                <div>
                                    <button className="contact-form-btn" onClick={onSubmit}  > Submit</button>
                                </div>
                                <div>
                                    <p style={{ color: 'gray', paddingTop: '25px' }}> Created by A Dilna Satheeshan and Shivam Bhasin </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
          





        </div>

    );

};

export default Contact;