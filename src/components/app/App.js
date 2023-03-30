import '../../scss/index.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Home from '../../pages/pages-navbar/Home';
import Men from '../../pages/pages-navbar/Men';
import Women from '../../pages/pages-navbar/Women';

import ScrollToTop from '../../utils/scrollToTop';
import Card from '../../pages/pages-card/Card';
import Basket from '../../pages/pages-basket/Basket';
import { ROUTES } from '../../utils/routes';

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
                    <Route path={ROUTES.BASKET} element={<Basket />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
