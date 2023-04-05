import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './Index.module.css';
import Login from '../../components/user/Login';

const LoginPage = () => {
    return (
        <main className="container">
            <div className={styles.loginPage}>
                <h2>Login</h2>
                <Login />
                <p>
                    Or <Link to={ROUTES.REGISTER}>register</Link>
                </p>
            </div>
        </main>
    );
};

export default LoginPage;
