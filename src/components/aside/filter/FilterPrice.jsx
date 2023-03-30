import React from 'react';
import './filterPrice.scss';

const FilterPrice = () => {
    return (
        <div className="filter">
            <h3>FILTER</h3>
            <div id="rating" className="slider">
                <div className="block-min"></div>
                <div className="color-range"></div>
                <div className="block-max"></div>
            </div>
        </div>
    );
};

export default FilterPrice;
