import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SideBar from './sideBar';
import Spinner from './Spinner';
import SideBar1 from "./try";
import Main1 from './Main1';
import SnakePage from './SnakePage';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Category from './Category';
import Memory from './gamespage/Memory';
import Knowledge from './gamespage/Knowledge';
import HotGames from './gamespage/HotGames';
import ReactionGames from './gamespage/ReactionGames';
import PrivateRoute from '../utils/PrivateRoute';
import JoinRoom from './onboard/joinroom';
import { ColorContext } from './context/color-context';
import Onboard from './onboard/onboard';
import JoinGame from './onboard/joingame';
import ChessGame from './chess/ui/chessgame';
import { Link, useHistory } from 'react-router-dom';
import { isIn } from './Header';
import cx from 'classnames';
import Roller from './Roller';
import TicTacToe from './TicTacToe';
import Search from './Search';
import News from './News';
import TicPage from './TicPage';
import A2048 from './A2048';
import Breakout from "./games/breakout";
import Hangman from './Hangman';
//import Reacteroids  from './Reactaroids';
import Tetris from './Tetris';
import ChessPage from './ChessPage';
import BrickPage from './BrickPage';
import HangPage from './HangPage';
import TetrisPage from './TetrisPage';
import A2048Page from './A2048page';
import Arrow from './Arrow';
import { footisin } from './Footer';
import Reference from './Reference';
import GameFootPage from './GameFootPage';

const App = () => {

    let history = useHistory();
    const [didRedirect, setDidRedirect] = React.useState(false)

    const playerDidRedirect = React.useCallback(() => {
        setDidRedirect(true)
    }, [])

    const playerDidNotRedirect = React.useCallback(() => {
        setDidRedirect(false)
    }, [])

    const [userName, setUserName] = React.useState('')

    

    const pathname = window.location.pathname;
    console.log(pathname);  
    const [search, setSearch] = useState('');
    const [toggle, setToggle] = useState(false);
    const [spinner,setSpinner]=useState(false)
    {/*const onSearchSubmit=(search)=>{
        console.log(search);
        this.setState({search:search});

    };*/}
    const toggleMenu = () => {
        setToggle(!toggle);

        console.log(toggle);

    }
    const onClose = () => {
        setToggle(false);

    }
    const onOutsideClose = () => {
        setToggle(false);

    }
    useEffect(()=>{
        
        setTimeout(() => { 
            setSpinner(true)
            console.log(spinner)
        }, 2000);
    },[])    
    const classes = cx(
        'pusher',
        'bottom',
        { 'dimmed': toggle }
    );
        

        return (
            <Router>
                <div >

                    <Header toggleMenu={toggleMenu} />
                    <div className={toggle ? "ui page dimmer" : ""}></div>
                    <SideBar toggle={toggle} onClose={onClose} onOutsideClose={onOutsideClose} onRefresh={pathname} />
                    <Arrow />
                    {spinner?'':<Spinner />}     
                 <Switch>
                    <Route path="/snake-game-page" exact component={SnakePage} />
                    <Route path="/" exact component={Main1} />
                    
                    <Route path="/create" exact component={SideBar1} />
                    <Route path="/snake-game-online" exact component={Menu} />
                    <Route path="/categories" exact component={Category} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/memory-walkthrough" exact component={Memory} />
                        <Route path="/knowledge" exact component={Knowledge} />
                        <Route path="/breakout" exact component={Breakout} />
                        <Route path="/news" exact component={News} />
                        <Route path="/hot-games" exact component={HotGames} />
                        <Route path="/search" exact component={Search} />  
                        <Route path="/reaction-games" exact component={ReactionGames} />
                        <Route path="/tictactoe" exact component={TicTacToe} />
                        <Route path="/ticpage" exact component={TicPage} />
                        <Route path="/2048" exact component={A2048} />
                        <Route path="/hangman" exact component={Hangman} />
                        <Route path="/asteroids" component={Hangman} />
                        <Route path="/tetris" exact component={Tetris} />
                        <Route path="/chesspage" exact component={ChessPage} />
                        <Route path="/brickpage" exact component={BrickPage} />
                        <Route path="/hangpage" exact component={HangPage} />
                        <Route path="/tetrispage" exact component={TetrisPage} />    
                        <Route path="/2048page" exact component={A2048Page} />    
                        <Route path="/references" exact component={Reference} /> 
                        <Route path="/gamespage" exact component={GameFootPage} /> 
                        <PrivateRoute path="/youarein">
                           
                            <Main1 />
                            <Header toggleMenu={toggleMenu} />
                            <div className={toggle ? "ui page dimmer" : ""}></div>
                            <SideBar toggle={toggle} onClose={onClose} onOutsideClose={onOutsideClose} />
                        </PrivateRoute>
                        <ColorContext.Provider value={{ didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect }}>
                            <Router>
                                <Switch>
                                    <Route path="/chess" exact>
                                        <Onboard setUserName={setUserName} />
                                    </Route>
                                    <Route path="/game/:gameid" exact component={ Onboard } >
                                        {didRedirect ?
                                            <React.Fragment>
                                                <JoinGame userName={userName} isCreator={true} />
                                                <ChessGame myUserName={userName} />
                                            </React.Fragment>
                                            :
                                            <JoinRoom />}
                                    </Route>
                                    <Redirect to="/" />
                                </Switch>
                            </Router>
                        </ColorContext.Provider>
                    </Switch>

                    
                    
                    

                    
                   
                    
                </div>

                <Footer />
            </Router>

            
        );
    
}

export default App;