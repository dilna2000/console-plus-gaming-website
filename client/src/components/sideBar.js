import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo2.png';
import SubMenu from './SubMenu';
import './sideBar.css';
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import { footisin } from './Footer';


class sideBar extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = { home: false, contact: false, about: false, category1: false, category2: false, category3: false, category4: false, search: false, news: false };

    onClickhome = () => {
        this.setState({ home: true, about: false, contact: false, category1: false, category2: false, category3: false, category4: false, search: false, news: false });
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            

        }
    }

    onClickabout = () => {
        this.setState({ about: true, home: false, contact: false, category1: false, category2: false, category3: false, category4: false, search: false, news: false });
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            

        }
    }
    onClickcontact = () => {

        this.setState({ contact: true, home: false, about: false, category1: false, category2: false, category3: false, category4: false, search: false, news: false });
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
           

        }
    }
    onClicksearch = () => {
        this.setState({ search: true, home: false, about: false, category1: false, category2: false, category3: false, category4: false, contact: false, news: false });
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        }

    }

    onClicknews = () => {
        this.setState({ news: true, home: false, about: false, category1: false, category2: false, category3: false, category4: false, contact: false, search: false });
        if (window.pageYOffset > 300) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            

        }

    }


    render() {

        const classes = cn(
            'ui', 'sidebar', 'overlay', 'right', 'vertical', 'menu', 'animating',
            { 'visible': this.props.toggle }

        );

        const onPageLoad = () => {
            if (this.props.onRefresh === '/about') {
                this.setState({ about: true, home: false, contact: false, search: false, news: false });
            }
            if (this.props.onRefresh === '/contact') {
                this.setState({ contact: true, about: false, home: false, search: false, news: false });
            }
            if (this.props.onRefresh === '/search') {
                this.setState({ search: true, home: false, about: false, contact: false, news: false });
            }
            if (this.props.onRefresh === '/') {
                this.setState({ home: true, about: false, contact: false, search: false, news: false });
            }
            if (this.props.onRefresh === '/news') {
                this.setState({ home: false, about: false, contact: false, search: false, news: true });
            }
            if (this.props.onRefresh === '/youarein') {
                this.setState({ home: true, about: false, contact: false, search: false, news: false });
            }

        }

        window.addEventListener('load', onPageLoad);

        console.log(this.props.homepropstate)


        return (
            <div>
                <OutsideClickHandler onOutsideClick={this.props.onOutsideClose}>
                    <div className="disappear">
                        <div className={classes}>
                            <div className="col-xs-12 col-sm-12 close">
                                <i className="close icon " onClick={this.props.onClose}></i>

                            </div>
                            <div className="col-xs-12 col-sm-12 ">
                                <ul>
                                    <Link to="/"><li className={this.state.home ? 'active item ' : 'item'} onClick={this.onClickhome}><i className="teal home icon"></i> Home</li></Link>
                                    <Link to="/about"><li className={this.state.about ? 'active item' : 'item'} onClick={this.onClickabout}><i className="teal info icon"></i>About</li></Link>
                                    <Link to="/contact" ><li className={this.state.contact ? 'active item' : 'item'} onClick={this.onClickcontact}><i className="teal phone icon"></i>Contacts</li></Link>
                                    <Link to="/search" ><li className={this.state.search ? 'active item' : 'item'} onClick={this.onClicksearch}><i className="teal search icon"></i>Search</li></Link>
                                    <Link to="/news" ><li className={this.state.news ? 'active item' : 'item'} onClick={this.onClicknews}><i className="teal book icon"></i>News</li></Link>
                                </ul>
                            </div>

                        </div>
                    </div>
                </OutsideClickHandler>
                <div className="sidebar-div">
                    <div className="ui  secondary pointing inverted vertical icon menu" style={{ marginTop: '15px' }} ref={this.myRef}>
                        <Link to="/"><a className={this.state.home ? 'active item clr' : 'item clr1'} style={{ marginBottom: '20px', marginTop: '20px' }} onClick={this.onClickhome}>
                            <div class="ui icon blue-tooltip" data-toggle="tooltip" data-placement="right" title="Home" >
                                <i class=" home icon"></i>
                            </div>
                        </a></Link>
                        <Link to="/about"><a className={this.state.about ? 'active item clr' : 'item clr1'} style={{ marginBottom: '10px' }} onClick={this.onClickabout}>
                            <div class="ui icon blue-tooltip" data-toggle="tooltip" data-placement="right" title="About you" >
                                <i class=" user icon " ></i>
                            </div>

                        </a></Link>
                        <Link to="/contact"><a className={this.state.contact ? 'active item clr' : 'item clr1'} style={{ marginBottom: '20px' }} onClick={this.onClickcontact}>
                            <div class="ui icon blue-tooltip" data-toggle="tooltip" data-placement="right" title="Contact us" >
                                <i class=" phone icon " ></i>
                            </div>

                        </a></Link>
                        <Link to="/search" className={this.state.search ? 'active item clr' : 'item clr1'} style={{ marginBottom: '20px' }} onClick={this.onClicksearch}><a>
                            <div class="ui icon blue-tooltip" data-toggle="tooltip" data-placement="right" title="Search" >
                                <i className="search icon"></i>
                            </div>
                        </a></Link>
                        <Link to="/news" className={this.state.news ? 'active item clr' : 'item clr1'} onClick={this.onClicknews}><a>
                            <div class="ui icon blue-tooltip" data-toggle="tooltip" data-placement="right" title="News" >
                                <i className="book icon"></i>
                            </div>
                        </a></Link>
                        {/*<a >
                        <SubMenu/>
                    </a>*/}

                    </div>
                </div>

            </div>
        );
    }
}


export default sideBar;