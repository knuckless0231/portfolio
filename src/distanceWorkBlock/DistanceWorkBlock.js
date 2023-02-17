import React from 'react';
import s from './distanceWorkBlock.module.css'
import generalContainer from '../common/styles/container.module.css'
import {Button} from '../common/Button/Button'
import {Title} from "../common/title/Title";



const DistanceWorkBlock = () => {

    return (
        <div className={s.distance}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div className={`${generalContainer.container} ${s.insideContainer}`}>
                    <Title title={'Looking into remote work options'}/>
                    <a href="#form">{<Button title={'Hire me'}/>}</a>
                </div>
                <div className={s.line}></div>
            </div>
        </div>
    );
};

export default DistanceWorkBlock;