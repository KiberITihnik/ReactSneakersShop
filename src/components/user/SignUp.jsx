import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/slices/userSlice';
import styles from '../../pages/pages-user/Index.module.css';
import Form from './Form';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }),
                );
                navigate('/');
            })
            .catch(console.error);
    };
    return (
        <div className={styles.login}>
            <Form title="register" handleClick={handleRegister} />
        </div>
    );
};

export default SignUp;
