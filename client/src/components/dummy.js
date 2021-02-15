
import React,{useState,useEffect} from 'react';
import main from '../images/main.jpg';
import game from '../images/gameblur.jpg';
import {datas} from '../shared/datas';
import console from '../images/console.jpg';
import './Main1.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import Carousel from 'react-elastic-carousel';


const Main1 = (props) => {
    const [search,setSearch]=useState('');
    const [imgurl,setimgurl]=useState(main);
    const url=[game,game];
    var picCount=0;
    const onInputChange=(e) => {
        setSearch(e.target.value);
    }
    const filtersearch=datas.filter((data)=>{
        return data.title.toLowerCase().indexOf(search.toLowerCase())!==-1;

    })

    const cardsclassic = filtersearch.slice(0,2).map((img) =>{
        return (
            <div class="ui link cards" style={{ display: 'inline-block',marginLeft:'10%'}}>
                <div class="card" style={{  marginLeft: '60px',maxWidth:'65%',zIndex:'1'}}>
                    <div class="image" >
                        <img src={img.src}/>
                    </div>
                    <div class="content">
                        <Link to="/snake-game-page" className="nav-link"> <div class="header">{img.title}</div> </Link>
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
                        <Link to="/chess" className="nav-link"> <div class="header">{img.title}</div> </Link>
                        <div class="description">
                        {img.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    );

    const cardsaction2 = filtersearch.slice(2, 4).map((img) => {
        return (
            <div class="ui link cards" style={{ display: 'inline-block', marginLeft: '10%' }}>
                <div class="card" style={{ marginLeft: '60px', maxWidth: '65%', zIndex: '1' }}>
                    <div class="image" >
                        <img src={img.src} />
                    </div>
                    <div class="content">
                        <Link to="/tictactoe" className="nav-link"> <div class="header">{img.title}</div> </Link>
                        <div class="description">
                            {img.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    );
    useEffect(() => {
        const interval = setInterval(() => {
            picCount=(picCount+1<url.length)? picCount+1 : 0;
            setimgurl(url[picCount]);
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="size">
            <div className="bg">
                <div className="container" >
                    <div className="row text-center">
                        <div class="col-12 col-sm-8 col-md-8 col-lg-8 boxstyle">
                            <h1  style={{textAlign:'left'}}>The Power of gaming </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="white">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                            Hello
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">
                            Appp
                        </div>
                    </div>
                </div>
            </div>

            <div className="black">
                <div className="container">
                        <div className="row text-center">
                            <div className="menu" >
                                <div className="mainitem">
                                <a>Latest</a>
                                </div>
                                <div className="mainitem">
                                <a>Avaiable</a>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6">

                            </div>
                        </div>
                </div>
            </div>

            <div className="white">
                sdshre
            </div>
            <div className="section">
            Apr 12, 2019 — Blog UIEverything you need to know about Mobile First Design ... A more deep approach on the mobile first and responsive design can wrap ... The user can experience the website completely on the desktop as ... The design hides or covers some details from the mobile users in order to make the site neat.

            </div>
            <div className="white">
            <div id="division">

                <h1>Back To The Classics! </h1>
            </div>
            <div s>
                {cardsclassic}

            </div><br />
            <div>
                <h1>Action games</h1>
            </div>
            <div >
                {cardsaction}
                </div>

                <div>
                    <h1>Action games</h1>
                </div>
                <div >
                    {cardsaction2}
                </div>
            </div>

        </div>
    );
};

export default Main1;

