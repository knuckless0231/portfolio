import React from 'react';
import s from './distanceWorkBlock.module.css'
import generalContainer from '../../common/styles/container.module.css'
import {Button} from '../../common/Button/Button'
import {Title} from "../../common/title/Title";
import {Line} from '../../common/Line/Line'


const DistanceWorkBlock = () => {

    return (
        <div className={s.distance}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <Line/>
                <div className={`${generalContainer.container} ${s.insideContainer}`}>
                    <Title title={'Looking into remote work options'}/>
                    <a href="src/components/distanceWorkBlock/DistanceWorkBlock#form">{<Button title={'Hire me'}/>}</a>
                </div>
                <Line/>
            </div>
        </div>
    );
};

export default DistanceWorkBlock;