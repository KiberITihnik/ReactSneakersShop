import './footer.scss';
import { vk, instagram, twitter, linkedIn, gitHub } from '../../utils/importIcon';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={vk} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={instagram} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={twitter} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={gitHub} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={linkedIn} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Frontend developer: Artem Lozovsky </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
