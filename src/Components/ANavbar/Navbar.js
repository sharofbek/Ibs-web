import React from 'react';
import Ibs from './Img/IBS logo 1.png'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={Ibs} alt=""/>
                </div>
                <div className={'menu'}>
                    <ul>
                        <li><a href="#">O IBS</a></li>
                        <li><a href="#">Помочь с выбором</a></li>
                    </ul>
                    <button className='course-btn'>Все курсы</button>
                    <div className="language">
                        <button>Ru</button>
                        <button>Uz</button>
                    </div>
                </div>
            </nav>
            <nav className='responseNavbar'>
                <input type="checkbox" id='nav-check'/>
                <div className="header">
                    <img src={Ibs} alt=""/>
                    <div className="menu">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
                <div className={'menu-item'}>
                    <ul>
                        <li><a href="#">O IBS</a></li>
                        <li><a href="#">Помочь с выбором</a></li>
                    </ul>
                    <button className='course-btn'>Все курсы</button>
                    <div className="language">
                        <button>Ru</button>
                        <button>Uz</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;