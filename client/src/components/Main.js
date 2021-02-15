
import React, { useState, useEffect } from 'react';
import './Main.css';
import main from '../images/main.jpg';
import game from '../images/gameblur.jpg';
import { datas } from '../shared/datas';
import console from '../images/console.jpg';
import { Link } from 'react-router-dom';


const Main = (props) => {
    const [search, setSearch] = useState('');
    const [imgurl, setimgurl] = useState(main);
    const url = [game, game];
    var picCount = 0;
    const onInputChange = (e) => {
        setSearch(e.target.value);
    }
    const filtersearch = datas.filter((data) => {
        return data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;

    })

    const cardsclassic = filtersearch.slice(0, 2).map((img) => {
        return (
            <div class="ui link cards" style={{ display: 'inline-block', marginLeft: '10%' }}>
                <div class="card" style={{ marginLeft: '60px', maxWidth: '65%', zIndex: '1' }}>
                    <div class="image" >
                        <img src={img.src} />
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


    const cardsaction = filtersearch.slice(2, 4).map((img) => {
        return (
            <div class="ui link cards" style={{ display: 'inline-block', marginLeft: '10%' }}>
                <div class="card" style={{ marginLeft: '60px', maxWidth: '65%', zIndex: '1' }}>
                    <div class="image" >
                        <img src={img.src} />
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
    useEffect(() => {
        const interval = setInterval(() => {
            picCount = (picCount + 1 < url.length) ? picCount + 1 : 0;
            setimgurl(url[picCount]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="size">
            <div className="image " style={{ backgroundImage: `url(${imgurl})` }}>
                <div className="container">
                    <div className="row">
                        <div className="span3 offset3" style={{ backgroundColor: 'yellow' }}  >
                            THE POWER OF GAMING
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui stackable two column grid" style={{
                backgroundImage: 'linear-gradient(45deg, #d9e0d7 10%, #faf9f0 10%, #faf9f0 50%, #d9e0d7 50%, #d9e0d7 60%, #faf9f0 60%, #faf9f0 100%)',
                backgroundSize: '7.07px 7.07px'
            }} >
                <div className="update-center ">
                    <div className="parallelogram"></div>
                    <div className="parallelogram"></div>
                </div>
            </div>
            <div class="division">
                <div className="menu ">
                    <div className="mainitems">
                        <a>Latest</a>
                    </div>
                    <div className="mainitems">
                        <a>Available</a>
                    </div>
                    <div class="ui inverted divider" style={{ display: 'inline' }}></div>


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
                <div style={{ marginTop: '20px' }}>
                    {cardsclassic}

                </div><br />
                <div>
                    <h1>Action games</h1>
                </div>
                <div style={{ marginTop: '20px' }}>
                    {cardsaction}
                </div><br />
            </div>
        </div>
    );
};

export default Main;