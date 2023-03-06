import React from 'react';
import s from './contacts.module.css'
import generalContainer from "../../common/styles/container.module.css";
import {Title} from "../../common/title/Title";
import {Line} from "../../common/Line/Line";
import {useForm} from "react-hook-form";


const Contacts = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={s.contactsBlock} id={'hire'}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <Title title={'Contacts'}/>
                <div className={s.formContainer}>

                    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                        <input placeholder={'Enter your name / company'} {...register("name", {required: true})} />
                        <input placeholder={'Enter email'} {...register("email", {required: true})} />
                        <input type="text" placeholder={"Say something"}
                               className={s.textForm} {...register("text", {required: true})}/>
                        <input type="submit" className={s.inputStyle}/>
                    </form>
                </div>
            </div>
    <Line/>
</div>
 )
};

export default Contacts;