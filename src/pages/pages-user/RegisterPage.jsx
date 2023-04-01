import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './Index.module.css';

const RegisterPage = () => {
    return (
        <main className="container">
            <div className={styles.login}>
                <h1>Register</h1>

                <p>
                    Already have an account? <Link to={ROUTES.LOGIN}>Sign in</Link>
                </p>
            </div>
        </main>
    );
};

export default RegisterPage;
