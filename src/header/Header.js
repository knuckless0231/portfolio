import React from 'react';
import s from './header.module.css'
import Navigation from "./Nav/Navigation";

const Header = () => {
    return (
        <div className={s.header}>
            <Navigation/>
        </div>
    );
};

export default Header;