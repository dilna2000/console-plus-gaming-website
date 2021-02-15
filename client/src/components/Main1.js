import React, { useState, useEffect } from 'react';


import Typical from 'react-typical';
import main from '../images/main.jpg';
import game from '../images/gameblur.jpg';

import { datas } from '../shared/datas';

import './Main1.css';

import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';





const Main1 = (props) => {
    const [search, setSearch] = useState('');
    const [imgurl, setimgurl] = useState(main);
    const [latest, setLatest] = useState(true);
    const [avail, setAvail] = useState(false);


    const url = [game, game];
    var picCount = 0;
    const onInputChange = (e) => {
        setSearch(e.target.value);
    }

    const onClickLatest = () => {
        setLatest(true);
        setAvail(false);

    }
    const onClickAvail = () => {
        setAvail(!avail);
        setLatest(false);

    }
    
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 750, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 3 }
    ]
    {/*const lists=datas.map((list)=>{
        return(
            <div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 main-list">
                    <img src={list.src} width="80%" height="80%" className="main-image" />
                    <div className="main-text-div">
                        <div className="main-text" >{list.title} </div>
                    </div>
                    <h2>{list.title}</h2>
                    
                </div>
            </div>
        );
    })*/}
    {/*const filtersearch=datas.filter((data)=>{
        return data.title.toLowerCase().indexOf(search.toLowerCase())!==-1;
            
    })
    
=======
    const filtersearch=datas.filter((data)=>{
        return data.title.toLowerCase().indexOf(search.toLowerCase())!==-1;
            
    })
   
>>>>>>> 8c71a912963faa2b4b06da17020690019a5714de
    const cardsclassic = filtersearch.slice(0,2).map((img) =>{
        return (
            <div class="ui link cards" style={{ display: 'inline-block',marginLeft:'10%'}}>
                <div class="card" style={{  marginLeft: '60px',maxWidth:'65%',zIndex:'1'}}>
                    <div class="image" >
                        <img src={img.src}/>
                    </div>
                    <div class="content">
                        <div class="header">{img.title}</div>
                        <div class="description">
                        {img.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    );
    const cardsaction = filtersearch.slice(2,4).map((img) => {
        return (
            <div class="ui link cards" style={{ display: 'inline-block',marginLeft:'10%'}}>
                <div class="card" style={{  marginLeft: '60px',maxWidth:'65%',zIndex:'1'}}>
                    <div class="image" >
                        <img src={img.src}/>
                    </div>
                    <div class="content">
                        <div class="header">{img.title}</div>
                        <div class="description">
                        {img.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);*/}


    useEffect(() => {
        const interval = setInterval(() => {
            picCount = (picCount + 1 < url.length) ? picCount + 1 : 0;
            setimgurl(url[picCount]);
        }, 2000);




        return () => clearInterval(interval);
    }, []);

    return (
        <div className="size">
            <div className="bg">
                <div className="container" >
                    <div className="row text-center">

                        <div class="col-12 col-sm-8 col-md-8 col-lg-8 boxstyle" >

                            <h1 className="main-power-fonts" style={{ textAlign: 'left' }}>The Power of gaming </h1>
                            <p style={{ textAlign: 'left' ,fontFamily: 'Ubuntu',fontSize: '15px',fontWeight:'normal'}} className="main-power-subfonts" > The energy to unite people, create empires and direct someone to challenge oneself to rise above the limitations 
                            - is what Gaming is well known for ! Our website strives to develop a platform which brings together the talent, 
                            craze, nostalgia and awesomeness which individuals might not be able to gain at the comfort of their RGB Gaming Beasts... 
                                Join this small initiative to make gaming, and game develpment more awesome </p> 


                        </div>
                    </div>
                </div>
            </div>

            


            <div className=" white-padding">
                <div className="container" style={{marginTop:'50px',marginBottom:'50px'}}>
                    <div className="row text-center" style={{marginBottom:'30px'}}>
                       <div className="col-12 col-sm-4 col-md-4 col-lg-4 main-bord main-icon1">
                          
                           <i className="  huge star outline icon"></i>
                          
                           <div>
                               <h3>Simple yet powerful user interface - convenient and visually dazzling!</h3>
                           </div>
                       </div>
                       <div className="col-12 col-sm-4 col-md-4 col-lg-4 main-bord main-icon2">
                           <i className="  huge chart line icon"></i>
                           <div>
                               <h3>Save your scores, track your improvement..with help of real-time graphs!</h3>
                           </div>
                       </div>
                       <div className="col-12 col-sm-4 col-md-4 col-lg-4 main-bord main-icon3">
                           <i className="   huge gamepad icon"></i>
                           <div>
                               <h3>Relive the old days by playing your favorites on the browser, no downloads!</h3>
                           </div>
                       </div>
                    
                    </div>
                    <div className="row text-center">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 main-bord main-icon4">
                           <i className=" huge chess queen icon main-bord main-icon4"></i>
                           <div>
                               <h3>The Modern Classics are here to challenge your skills - don't take those lightly!</h3>
                           </div>
                       </div>
                       <div className="col-12 col-sm-4 col-md-4 col-lg-4 main-bord main-icon5">
                           <i className="huge tasks icon"></i>
                           <div>
                               <h3>Some news updates for you, not only gaming ones, but from all domains.</h3>
                           </div>
                       </div>
                       <div className="col-12 col-sm-4 col-md-4 col-lg-4 main-bord main-icon6">
                           <i className="  huge github icon"></i>
                           <div>
                               <h3>Want to know how we made all this? Head to the References section to know more!</h3>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className="black">

            <div className="text-center typewriter">
                <p className="typewriter-display main-start-fonts"  >START &nbsp;</p>
                <Typical className="typewriter-text main-start-fonts"
                steps={['GAMING!!', 2000, 'PLAYING!!', 2000]}
                loop={Infinity}
                wrapper="p"
                />

            </div>

            </div>


            <div className="black black-padding">
                <div className="container ">
                    <div className="row text-center">
                        <div className="menu" >
                            <div className={latest ? 'mainitem mainitem-border ' : 'mainitem '} onClick={onClickLatest}>
                                <a ><h3 className="main-list-fonts">Latest</h3></a>
                            </div>
                            <div className={avail ? 'mainitem mainitem-border ' : 'mainitem '} onClick={onClickAvail}>
                                <a ><h3 className="main-list-fonts">Available</h3></a>
                            </div>
                        </div>
                        {/*<div className="main-hidden-left" ></div>
                        <div className="main-hidden-right" ></div>*/}
                        {latest ?
                            <div>
                                <div>
                                    <Carousel breakPoints={breakPoints} >
                                        {datas.map(data =>
                                            <div>
                                                <Link to={data.path}><img src={data.src} width="80%" height="350px" className="main-game-img" />
                                                <h2 className="main-game-title">{data.title}</h2>
                                                <p className="main-game-description">{data.description}</p>
                                                <h3 className="main-game-genre" >{data.genre}</h3></Link>
                                            </div>
                                        )}
                                    </Carousel>

                                </div>

                            </div> :
                            <div>
                                <div>
                                    <Carousel breakPoints={breakPoints} >
                                        {datas.map(data =>
                                            <div>
                                                <Link to={data.path}><img src={data.src} width="90%" height="350px" className="main-game-img" />
                                                <h2 className="main-game-title">{data.title}</h2>
                                                <p className="main-game-description">{data.description}</p>
                                                <h3 className="main-game-genre" >{data.genre}</h3></Link>
                                            </div>
                                        )}
                                    </Carousel>
                                </div>

                            </div>}
                    </div>
                </div>
            </div>

            


        </div>
    );
};

export default Main1;