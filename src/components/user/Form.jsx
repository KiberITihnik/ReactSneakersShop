import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../pages/pages-user/Index.module.css';

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit()}>
            <input
                {...register('email', {
                    required: 'Напишите свой Email',
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов',
                    },
                })}
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />

            <div className={styles.hint}>
                {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
            </div>

            <input
                {...register('password', {
                    required: 'Напишите свой password',
                    minLength: {
                        value: 7,
                        message: 'Минимум 7 символов',
                    },
                })}
                className={styles.input}
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <div className={styles.hint}>
                {errors?.password && <p>{errors?.password?.message || 'password!'}</p>}
            </div>
            <button className={styles.btn} onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </form>
    );
};

export default Form;
