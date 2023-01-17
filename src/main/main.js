import React from 'react';
import s from './main.module.css'
import generalContainer from '../common/styles/container.module.css'


const Main = () => {
    return (
        <div className={s.mainBlock}>

            <div className={generalContainer.container}>

                <div className={s.textBlock}>
                    <span>Hello there</span>
                    <h1>I'm Kostya Kokhanov,</h1>
                    <p> Front-end-Developer</p>
                </div>

                <div className={s.photo}>
                    <img src="" alt=""/>
                </div>

            </div>


        </div>
    );
};

export default Main;