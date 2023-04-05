import { redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../redux/slices/userSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    return isAuth ? (
        <div>
            <h2>Welcome</h2>
            <button onClick={() => dispatch(removeUser)}>Log out from {email}</button>
        </div>
    ) : (
        redirect('/login')
    );
};

export default HomePage;
