import React from 'react';
import { useGetCardQuery } from '../../redux/api/sneakersApiSlice';

import Card from './card/Card';
import './cards.scss';
import Skeleton from './Skeleton';

const Cards = () => {
    const { data = [], isLoading } = useGetCardQuery();

    return (
        <div className="cards">
            {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : data.map((obj) => (
                      <Card
                          key={obj.id}
                          ImgCard={obj.imageUrl}
                          name={obj.name}
                          price={obj.price}
                          sizes={obj.sizes}
                      />
                  ))}
        </div>
    );
};

export default Cards;
