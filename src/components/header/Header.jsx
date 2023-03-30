import React from 'react';
import Sort from './sort/Sort';
import HeaderTitle from './header-title/HeaderTitle';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <HeaderTitle />
            <Sort />
        </div>
    );
};

export default Header;
