import React from 'react';
import generalContainer from "../../common/styles/container.module.css";
import s from "./project.module.css";


const Project = (props) => {
    return (
        <div>
            <div className={s.buttonImageContainer}>
                <img src={props.img} className={s.img} alt=""/>
                <button className={s.btn}>Button</button>
            </div>
            <div className={`${s.buttonImageContainer} ${s.descriptionContainer}`}>
                <div className={s.title}>{props.title}</div>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;