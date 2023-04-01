import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import './card.scss';

const Card = ({ ImgCard, name, price, sizes }) => {
    const [activeSize, setActiveSize] = React.useState(0);
    const typeSizes = ['41', '42', '43', '44'];

    return (
        <div className="card">
            <img src={ImgCard} alt="" />
            <div className="card-title">
                <NavLink to={ROUTES.CARD} className="link-card">
                    {name}
                </NavLink>
                <h3>${price}</h3>
            </div>
            <div className="card-down">
                <ul className="card-subtitles">
                    {sizes.map((sizeId, id) => (
                        <li
                            key={id}
                            onClick={() => setActiveSize(sizeId)}
                            className={activeSize === sizeId ? 'active' : ''}>
                            {typeSizes[sizeId]}
                        </li>
                    ))}
                </ul>
                <button className="btn-card-basket">
                    <svg
                        className="icon-btn-card-basket"
                        width="30px"
                        height="30px"
                        viewBox="0 -2 22 22"
                        id="meteor-icon-kit__solid-plus"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.5 9.5H2C1.17157 9.5 0.5 10.1716 0.5 11C0.5 11.8284 1.17157 12.5 2 12.5H9.5V20C9.5 20.8284 10.1716 21.5 11 21.5C11.8284 21.5 12.5 20.8284 12.5 20V12.5H20C20.8284 12.5 21.5 11.8284 21.5 11C21.5 10.1716 20.8284 9.5 20 9.5H12.5V2C12.5 1.17157 11.8284 0.5 11 0.5C10.1716 0.5 9.5 1.17157 9.5 2V9.5z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;
