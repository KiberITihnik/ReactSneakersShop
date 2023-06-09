import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../redux/slices/userSlice';
import Form from './Form';
import styles from '../../pages/pages-user/Index.module.css';
import { ROUTES } from '../../utils/routes';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    }),
                );
                navigate(`${ROUTES.HOME_PAGE}`);
            })
            .catch(() => alert('Invalid User!'));
    };

    return (
        <div className={styles.login}>
            <Form title="sign in" handleClick={handleLogin} />
        </div>
    );
};

export default Login;
