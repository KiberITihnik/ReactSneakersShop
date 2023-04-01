import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './Index.module.css';

const LoginPage = () => {
    return (
        <main className="container">
            <div className={styles.login}>
                <h1>Login</h1>

                <p>
                    Or <Link to={ROUTES.REGISTER}>register</Link>
                </p>
            </div>
        </main>
    );
};

export default LoginPage;
