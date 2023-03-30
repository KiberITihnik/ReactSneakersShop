import React from 'react';
import './basket.scss';
import BtnBasket from '../../components/btn-basket/BtnBasket';
import BasketCard from '../../components/basket/BasketCard';

const Basket = () => {
    return (
        <div>
            <main className="section">
                <section className="basket">
                    <h3 className="basket-title">
                        Your shopping cart, <span>4 товара</span>
                    </h3>
                    <div className="basket-center">
                        <div className="basket-cards">
                            <BasketCard />
                        </div>
                        <div className="basket-right">
                            <h3>Order sum</h3>
                            <div>
                                <h4 className="value"></h4>
                                <h4 className="total-value"></h4>
                            </div>
                            <BtnBasket />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Basket;
