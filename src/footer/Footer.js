import React from 'react';
import s from './footer.module.css'
import generalContainer from "../common/styles/container.module.css";
import InstImg from '../common/icons/instagram.png'
import TelegramImg from '../common/icons/telegram.png'
// import LinkImg from '../common/icons/link.jpg'
import LinkImg from '../common/icons/linkedin.PNG'



const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.line}></div>
            <div className={`${generalContainer.container} ${s.container}`}>
                <h1 className={s.titleFooter}>Let’s work together</h1>
                <div className={s.iconsBlock}>
                    <img src={TelegramImg} className={s.icon} alt=""/>
                    <img src={InstImg} className={s.icon} alt=""/>
                    <img src={LinkImg} className={s.icon} alt=""/>
                </div>
                {/*<div>(c) All rights are protected</div>*/}
            </div>
        </div>
    );
};

export default Footer;