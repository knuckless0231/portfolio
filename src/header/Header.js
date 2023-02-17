import React from 'react';
import s from './header.module.css'
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
    return (
        <div className={s.header}>
            <Sidebar/>
        </div>
    );
};

export default Header;