import React from 'react';
import s from './skills.module.css'
import generalContainer from '../common/styles/container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${generalContainer.container} ${s.skillsContainer}`}>
                <div className={s.title}>
                    Services
                </div>
                <div className={s.skills}>
                  <Skill title={'JS'} skill={'Skill1qewrвe rwreку еуеуцкцукуццкrwsd'}/>
                  <Skill title={'HTML'} skill={'weerewewrwуцкцукукуцуr'} />
                  <Skill title={'CSS'} skill={'Skiwerwwrewrerwr'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;