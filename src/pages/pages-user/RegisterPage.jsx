import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './Index.module.css';
import SignUp from '../../components/user/SignUp';

const RegisterPage = () => {
    return (
        <main className="container">
            <div className={styles.loginPage}>
                <h2>Register</h2>
                <SignUp />
                <p>
                    Already have an account? <Link to={ROUTES.LOGIN}>Sign in</Link>
                </p>
            </div>
        </main>
    );
};

export default RegisterPage;
