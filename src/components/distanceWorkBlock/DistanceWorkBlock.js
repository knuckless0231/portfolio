import React from 'react';
import s from './distanceWorkBlock.module.css'
import generalContainer from '../../common/styles/container.module.css'
import {Button} from '../../common/Button/Button'
import {Title} from "../../common/title/Title";
import {Line} from '../../common/Line/Line'


const DistanceWorkBlock = () => {

    return (
        <div id={'hire'} className={s.distance}>
            <Line/>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div className={`${generalContainer.container} ${s.insideContainer}`}>
                    <Title title={'Looking into remote work options'}/>
                    <a href="#hire">{<Button title={'Hire me'}/>}</a>
                </div>
            </div>
            <Line/>
        </div>
    );
};

export default DistanceWorkBlock;

