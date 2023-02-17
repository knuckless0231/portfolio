import React from 'react';
import s from './sidebar.module.css'

const Sidebar = () => {
    return (
        <div>
                <div className={s.burgerMenu}>
                    <div className={s.burgerClass}></div>
                    <div className={s.burgerClass}></div>
                    <div className={s.burgerClass}></div>
                </div>

            <div className={s.menu}>
                {/*<div className={s.linkStyle} href="/salads">*/}
                {/*    Skills*/}
                {/*</div>*/}
                {/*<div className={s.linkStyle} href="/pizzas">*/}
                {/*    Work*/}
                {/*</div>*/}
                {/*<div className={s.linkStyle} href="/desserts">*/}
                {/*    Contacts*/}
                {/*</div>*/}
            </div>

        </div>


    );
};

export default Sidebar;