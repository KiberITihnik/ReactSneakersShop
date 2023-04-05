import React from 'react';
import { useSelector } from 'react-redux';
import { SearchContext } from '../app/App';

import axios from 'axios';

import Card from './card/Card';
import './cards.scss';
import Skeleton from './skeleton/Skeleton';

const Cards = () => {
    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const { categoryId, sort, currentPage } = useSelector((state) => state.filter);

    React.useEffect(() => {
        setIsLoading(true);

        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `categoryId=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(
                `https://6419d642f398d7d95d4ac24f.mockapi.io/sneakers?page=${currentPage}&limit=6${category}&sortBy=${sortBy}${search}`,
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });

        window.scrollTo(0, 0);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    const sneakers = items
        .filter((obj) => {
            if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
        .map((obj) => (
            <Card
                key={obj.id}
                ImgCard={obj.imageUrl}
                name={obj.name}
                price={obj.price}
                sizes={obj.sizes}
            />
        ));

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return <div className="cards">{isLoading ? skeletons : sneakers}</div>;
};

export default Cards;
