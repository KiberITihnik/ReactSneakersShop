import React from 'react';
import './cart.scss';
import BtnCart from '../../components/btn-cart/BtnCart';
import CartCard from '../../components/cart/CartCard';

const Cart = () => {
    return (
        <div>
            <main className="section">
                <section className="cart">
                    <h3 className="cart-title">
                        Your shopping cart, <span>4 товара</span>
                    </h3>
                    <div className="cart-center">
                        <div className="cart-cards">
                            <CartCard />
                        </div>
                        <div className="cart-right">
                            <h3>Order sum</h3>
                            <div>
                                <h4 className="value"></h4>
                                <h4 className="total-value"></h4>
                            </div>
                            <BtnCart />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Cart;
