import React from 'react';
import s from './navigation.module.css'


const Navigation = () => {
    return (
        <div className={s.nav}>
            <a href="src/components/header/Nav/Navigation" className={s.link}>main</a>
            <a href="src/components/header/Nav/Navigation" className={s.link}>skills</a>
            <a href="src/components/header/Nav/Navigation" className={s.link}>work</a>
            <a href="src/components/header/Nav/Navigation" className={s.link}>contact</a>
        </div>
    );
};

export default Navigation;