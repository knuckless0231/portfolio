import React from 'react';
import s from './contacts.module.css'
import generalContainer from "../common/styles/container.module.css";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${generalContainer.container} ${s.container}`}>
            <div>Contacts</div>
            <div className={s.formContainer}>
                <form className={s.form}>
                    <input className={s.input} type="text" placeholder={'type text'}/>
                    <input className={s.input} type="text" placeholder={'type text'}/>
                    <textarea className={s.textArea} name=""  cols="30" rows="10">
                    </textarea>
                </form>
            </div>
            <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;