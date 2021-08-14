import React from "react";
import "../assets/css/Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import format from '../configs/USDCurrency'

export default function Cart() {
    const cart = useSelector((state) => state.cart);

    return (
        <div className='cart-wrapper'>
            {cart.products.length === 0 ? (
                <p className="mt-5">Bạn chưa thêm gì vào giỏ hàng</p>
            ) : (
                <div style={{height: '80%'}}>
                    <div className='item-wrapper'>
                        {cart.products.map((item) => (
                            <CartItem item={item} />
                        ))}
                    </div>
                    <div className='cart-bottom'>
                        <div className='total-price'>
                            <span className='total-text'>Total</span>
                            <span className='total-price'>
                                {format(cart.totalPrice)}
                            </span>
                        </div>
                        <button className='btn-checkout'>check out</button>
                        <button className='btn-view-cart'>view cart</button>
                    </div>
                </div>
            )}
        </div>
    );
}
