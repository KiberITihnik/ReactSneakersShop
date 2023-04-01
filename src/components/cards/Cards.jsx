import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCardQuery } from '../../redux/api/sneakersApiSlice';

import Card from './card/Card';
import './cards.scss';
import Skeleton from './Skeleton';

const Cards = () => {
    const { id } = useParams();

    useEffect(() => {});

    const { data = [], isLoading } = useGetCardQuery({ categoryId: id });
    console.log(data);
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
