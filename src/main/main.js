import React from 'react';
import s from './main.module.css'
import generalContainer from '../common/styles/container.module.css'
import photo from '../common/photo/photo_2023-02-14_18-01-22.jpg'
import {Line} from "../common/Line/Line";


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={generalContainer.container}>

                <div className={s.textBlock}>
                    <span className={s.mainTitle}>Hello there</span>
                    <h1>I'm Kostya Kokhanov,</h1>
                    <p className={s.mainTitle}>Front-end-Developer</p>
                </div>

                <div className={s.photo}>
                    <img src={photo} className={s.ava} alt="portfolio_photo"/>
                </div>
                <div className={s.line}></div>
                {/*<Line />*/}
                {/*<hr/>*/}
            </div>

        </div>

    );
};

export default Main;