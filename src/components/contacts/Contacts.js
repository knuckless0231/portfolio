import React from 'react';
import s from './contacts.module.css'
import generalContainer from "../../common/styles/container.module.css";
import {Button} from "../../common/Button/Button";
import {Title} from "../../common/title/Title";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <Title title={'Contacts'}/>
            <div className={s.formContainer}id={'form'}>
                <form className={s.form} >
                    <input className={s.input} type="text" placeholder={'type text'}/>
                    <input className={s.input} type="text" placeholder={'type text'}/>
                    <textarea className={s.textArea} name=""  cols="30" rows="10">
                    </textarea>
                </form>
            </div>
                <Button title={'Send'}/>
            </div>
        </div>
    );
};

export default Contacts;