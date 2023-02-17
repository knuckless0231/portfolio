import React from 'react';
import s from './title.module.css'


export const Title = (props) => {
    return (
        <div>
            <h2 className={s.title}>{props.title}</h2>
            {/*<div className={s.psevdo}></div>*/}
        </div>
    );
};

