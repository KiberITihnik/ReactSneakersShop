import React from 'react';

import '../pages-navbar/scss/men.scss';
import Aside from '../../components/aside/Aside';
import Cards from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import Pagination from '../../components/cards/pagination/Pagination';

const Men = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(0);

    React.useEffect(() => {
        setIsLoading(true);
        fetch('https://6419d642f398d7d95d4ac24f.mockapi.io/sneakers?categoryId=' + categoryId)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    return (
        <main className="section">
            <Header />
            <div className="main">
                <Aside />
                <div>
                    <Cards />
                    <Pagination />
                </div>
            </div>
        </main>
    );
};

export default Men;
