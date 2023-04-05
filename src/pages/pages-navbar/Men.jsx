import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCurrentPage } from '../../redux/slices/filterSlice';

import '../pages-navbar/scss/men.scss';

import Cards from '../../components/cards/Cards';
import Header from '../../components/header/Header';
import Sidebar from '../../components/aside/Sidebar';
import Pagination from '../../components/cards/pagination/Pagination';

const Men = () => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state) => state.filter);

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    };

    return (
        <main className="section">
            <Header />
            <div className="main">
                <Sidebar />
                <div>
                    <Cards />
                    <Pagination currentPage={currentPage} onChangePage={onChangePage} />
                </div>
            </div>
        </main>
    );
};

export default Men;

// const [categoryId] = React.useState(0);
// const [sortType, setSortType] = React.useState(0);
// const [items, setItems] = React.useState([]);
// const [isLoading, setIsLoading] = React.useState(true);

// const dispatch = useDispatch();
// const { categoryId, sort } = useSelector((state) => state.filter);

// React.useEffect(() => {
//     setIsLoading(true);

//     const sortBy = sort.sortProperty.replace('-', '');
//     const category = categoryId > 0 ? `category=${categoryId}` : '';

//     axios
//         .get(
//             `https://6419d642f398d7d95d4ac24f.mockapi.io/sneakers?${category}&sortBy=${sortBy}`,
//         )
//         .then((res) => {
//             setItems(res.data);
//             setIsLoading(false);
//         });

//     window.scrollTo(0, 0);
// }, [categoryId, sort.sortProperty]);
