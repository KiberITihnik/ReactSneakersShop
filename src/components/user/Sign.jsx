import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { setUser } from '../../redux/slices/userSlice';

const Sign = () => {
    const dispatch = useDispatch;

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(console.log).catch(console.log);
    };
    return (
        <div>
            <Form title="register" handleClick={handleRegister} />
        </div>
    );
};

export default Sign;
