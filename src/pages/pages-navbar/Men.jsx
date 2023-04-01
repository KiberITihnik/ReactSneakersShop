import React from 'react';

import axios from 'axios';
import '../pages-navbar/scss/men.scss';
import Cards from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import Sidebar from '../../components/aside/Sidebar';
// import Pagination from '../../components/cards/pagination/Pagination';

const Men = () => {
    // const [items, setItems] = React.useState([]);
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [categoryId] = React.useState(0);
    // const [sortType, setSortType] = React.useState(0);

    // React.useEffect(() => {
    //     const category = categoryId > 0 ? `category=${categoryId}` : '';
    //     axios
    //         .get(`https://6419d642f398d7d95d4ac24f.mockapi.io/sneakers?${category}`)
    //         .then((res) => {
    //             setItems(res.data);
    //             setIsLoading(false);
    //         });

    //     window.scrollTo(0, 0);
    // }, [categoryId]);

    return (
        <main className="section">
            <Header />
            <div className="main">
                <Sidebar />
                <div>
                    <Cards />
                    {/* <Pagination /> */}
                </div>
            </div>
        </main>
    );
};

export default Men;
