import '../../scss/index.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Home from '../../pages/pages-navbar/Home';
import Men from '../../pages/pages-navbar/Men';
import Women from '../../pages/pages-navbar/Women';

import ScrollToTop from '../../utils/scrollToTop';
import Card from '../../pages/pages-card/Card';
import Cart from '../../pages/pages-cart/Cart';
import { ROUTES } from '../../utils/routes';
import HomePage from '../../pages/pages-user/HomePage';
import LoginPage from '../../pages/pages-user/LoginPage';
import RegisterPage from '../../pages/pages-user/RegisterPage';

function App() {
    return (
        <div className="wrapper">
            <Router>
                <ScrollToTop />
                <Navbar />

                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.MEN} element={<Men />} />
                    <Route path={ROUTES.WOMEN} element={<Women />} />
                    <Route path={ROUTES.CARD} element={<Card />} />
                    <Route path={ROUTES.CART} element={<Cart />} />
                    <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
                    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                    <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
