import React from 'react';
import s from './footer.module.css'
import generalContainer from "../common/styles/container.module.css";




const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div>Kostya Kokhanov</div>
                <div className={s.iconsBlock}>
                    <div className={s.icon}>er</div>
                    <div className={s.icon}>er</div>
                    <div className={s.icon}>re</div>
                    <div className={s.icon}>re</div>
                </div>
                <div>(c) All rights are protected</div>
            </div>
        </div>
    );
};

export default Footer;