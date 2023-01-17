import React from 'react';
import s from './distanceWorkBlock.module.css'
import generalContainer from '../common/styles/container.module.css'


const DistanceWorkBlock = () => {

    console.log(typeof NaN)

    return (
        <div className={s.distance}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div className={`${generalContainer.container} ${s.insideContainer}`}>
                    <div>Looking into remote work options</div>
                    <button className={s.btn} onClick={a=>a}>Hire me</button>
                </div>
            </div>
        </div>
    );
};

export default DistanceWorkBlock;