import React, { useState } from 'react';
import './Footer.css';
import consoleimg from '../images/gameconsole1.png';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logo12345.png';
export var footisin = false;
const Footer = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            footisin = true;
            console.log(footisin)

        }

    };

    return (
        <div className="footer-main">
            <div className="ui center aligned container margin">

                <div className="ui stackable inverted divided grid">
                    <div className="five wide column">
                        <div className="ui inverted link list">

                            <div className="footer-first"> <img src={Logo} width="200px" height="30px"/></div>
                            <div className="footer-second">
                            Our website strives to develop a platform which brings together the talent, craze, nostalgia and awesomeness which individuals might not be able to gain at the comfort of their RGB Gaming Beasts... 
                           </div>
                        </div>

                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list ">
                            < img src={consoleimg} width="50%" height="60%" style={{ marginLeft: '30px' }} />
                            <h3 className="footer-vocal">Vocal for local</h3>
                        </div>
                    </div>
                    <div className="five wide column">
                        <div className="ui inverted link list " >
                            <p className="footer-useful">Useful Links</p>
                            <Link to="/gamespage"><a className="link-color " onClick={checkScrollTop}> Games</a></Link>
                            <Link to="/references"><a className="link-color " onClick={checkScrollTop}>References</a></Link>
                        </div>
                    </div>

                    {/*<div className="seven wide columns">
                        <h4 className="ui inverted header">fsh</h4>
                        <div>bjgr</div>
                    </div>*/}

                </div>
                <div className="text-center footer-copyright fonts-copyright" >@copyright | 2020</div>
                <div className="text-center padding-footer " >
                  
                    
                <a href="https://youtu.be/rUvB2JIwwl4" target="_blank" style={{color:'white'}}><button class="ui circular linkedin icon button" style={{ marginRight: '10px' }}>
                       <i class="linkedin icon"></i>
                    </button></a>
                    <a href="https://youtu.be/rUvB2JIwwl4" target="_blank" style={{color:'white'}}><button class="ui circular facebook icon button" style={{ marginRight: '10px' }}>
                        <i class="facebook  icon"></i>
                    </button></a>
                    <a href="https://youtu.be/rUvB2JIwwl4" target="_blank" style={{color:'white'}}><button class="ui circular youtube icon button" style={{ marginRight: '10px' }}>
                       <i class="youtube  icon"></i>
                    </button></a>
                    {/*<i className="large facebook icon" style={{opacity:'0.4',marginRight:'20px'}}></i>
                            <i className=" large  twitter icon" style={{opacity:'0.4',marginRight:'20px'}}></i>
                            <i className=" large youtube  icon" style={{opacity:'0.4',marginRight:'20px'}}></i>
                <i className=" large linkedin icon" style={{opacity:'0.4'}}></i> */}
                    {/*< img src={consoleimg} width="20%" height="20%"   />*/}
                </div>




            </div>
        </div>
    );


};

export default Footer;