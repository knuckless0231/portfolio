import React from 'react';
import s from './skill.module.css'



const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.spanSkill}>{props.skill}</span>
        </div>
    );
};

export default Skill;