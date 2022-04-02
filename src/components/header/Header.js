import React from 'react';
import logo from '../../images/Logo.svg'
import './header.css'

const Header = () => {
    return (
        <div className='wrapper'>
            <img src={logo} alt="" />
            <nav>
                <a href="/order">Order</a>
                <a href="/order-review">Order review</a>
                <a href="/inventory">Inventory</a>
                <a href="feedback">Feedback</a>
            </nav>
        </div>
    );
};

export default Header;