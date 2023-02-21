import React from 'react';
import s from './skill.module.css'



const Skill = (props) => {
    return (
        <div className={s.skill}>
            <img src={props.img} className={s.icon}></img>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.spanSkill}>{props.skill}</span>
        </div>
    );
};

export default Skill;