import React, { useState } from 'react';
import cn from 'classnames';
import './SubMenu.css';

const SubMenu = () => {
    const [toggle, setToggle] = useState(false);
    const [category1, setcategory1] = useState(false);
    const [category2, setcategory2] = useState(false);
    const [category3, setcategory3] = useState(false);
    const [category4, setcategory4] = useState(false);

    const classes = cn('ui', 'secondary', 'vertical', 'pointing', 'menu', { 'transition': toggle, 'visible': toggle });
    const onToggleMenu = () => {

        console.log(toggle)
        setToggle(!toggle);
        console.log(toggle)
    };
    const onToggleLeave = () => {
        setToggle(false);
        console.log(toggle)

        setToggle(!toggle);
    };

    const onCategory1 = () => {
        setcategory1(!category1);
        setcategory2(false);
        setcategory3(false);
        setcategory4(false);

    }
    const onCategory2 = () => {
        setcategory2(!category2);
        setcategory1(false);
        setcategory3(false);
        setcategory4(false);
    }

    const onCategory3 = () => {
        setcategory3(!category3);
        setcategory2(false);
        setcategory1(false);
        setcategory4(false);
    }

    const onCategory4 = () => {
        setcategory4(!category4);
        setcategory2(false);
        setcategory3(false);
        setcategory1(false);
    }


    return (
        <div >

            <div className="ui dropdown item " onMouseEnter={onToggleMenu} onMouseLeave={onToggleLeave}>
                <i class="info icon" ></i>
                <div className={classes} >
                    <div className="header brd">Categories</div>

                    <div class="ui dropdown item" onMouseEnter={onToggleMenu} onMouseLeave={onToggleLeave}>
                        <i class="info icon" ></i>
                        <div class={classes} >
                            <div class="header brd">Categories</div>

                            <div class={category1 ? " active item " : "item"} onClick={onCategory1} >Memory Walkthrough</div>
                            <a class={category2 ? "active item " : "item"} onClick={onCategory2} >Knowledge games</a>
                            <a class={category3 ? "active item" : "item"} onClick={onCategory3} >Hot games</a>
                            <a class={category4 ? "active item " : "item"} onClick={onCategory4} >Reaction  games</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SubMenu;