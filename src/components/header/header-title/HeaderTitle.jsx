import React from 'react';
import './headerTitle.scss';
import ImgHeader from './lifestyle.jpg';

const HeaderTitle = () => {
    return (
        <div className="header-tittle">
            <img className="img-header" src={ImgHeader} alt="" />
            <h2>LIFESTYLE SNEAKERS</h2>
        </div>
    );
};

export default HeaderTitle;
