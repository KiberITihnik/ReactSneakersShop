import React from 'react';

import './categories.scss';

const Categories = ({ value, onChangeCategory }) => {
    const categories = ['LIFESTYLE', 'ORIGINAL', 'BASKETBALL', 'FOOTBALL'];

    return (
        <div className="categories">
            <ul>
                <h3>SNEAKER'S</h3>
                {categories.map((itemName, i) => (
                    <li
                        key={i}
                        onClick={() => onChangeCategory(i)}
                        className={value === i ? 'active' : 'sneaker'}>
                        <h4>{itemName}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
