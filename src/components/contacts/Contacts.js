import React from 'react';
import s from './contacts.module.css'
import generalContainer from "../../common/styles/container.module.css";
import {Button} from "../../common/Button/Button";
import {Title} from "../../common/title/Title";
import {Line} from "../../common/Line/Line";
import {useForm} from "react-hook-form";

// export default function App() {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//
//     console.log(watch("example")); // watch input value by passing the name of it
//
//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {/* register your input into the hook by invoking the "register" function */}
//             <input defaultValue="test" {...register("example")} />
//
//             {/* include validation with required or other standard HTML validation rules */}
//             <input {...register("exampleRequired", { required: true })} />
//             {/* errors will return when field validation fails  */}
//             {errors.exampleRequired && <span>This field is required</span>}
//
//             <input type="submit" />
//         </form>
//     );
// }

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
                        <input type="text" placeholder={"Say something"} className={s.textForm} {...register("text", {required: true})}/>
                        <input type="submit" className={s.inputStyle} />
                    </form>

                    {/*<form className={s.form}>*/}
                    {/*    <input className={s.input} type="text" placeholder={'type text'}/>*/}
                    {/*    <input className={s.input} type="text" placeholder={'type text'}/>*/}
                    {/*    <textarea className={s.textArea} name="" cols="30" rows="10">*/}
                    {/*</textarea>*/}
                    {/*</form>*/}

                </div>
                {/*<Button title={'Send'} type="submit"/>*/}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder={'type text'} {...register("exampleRequired", {required: true})} />

                        <input placeholder={'type text'} {...register("exampleRequired", {required: true})} />

                        <input type="submit"/>
                    </form>

                    {/*<form className={s.form}>*/}
                    {/*    <input className={s.input} type="text" placeholder={'type text'}/>*/}
                    {/*    <input className={s.input} type="text" placeholder={'type text'}/>*/}
                    {/*    <textarea className={s.textArea} name="" cols="30" rows="10">*/}
                    {/*</textarea>*/}
                    {/*</form>*/}

                </div>
                {/*<Button title={'Send'} type="submit"/>*/}
            </div>
            <Line/>
        </div>
    );
};

export default Contacts;