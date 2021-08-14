import React from "react";
import Scale from "../assets/imgs/scale.png";
import Heart from "../assets/imgs/heart.png";
import Rating from "react-rating-stars-component";

import { Link } from "react-router-dom";

import "../assets/css/ProductItem.css";

import format from "../configs/USDCurrency";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cart.action";

export default function ProductItem(props) {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div className='product-item-wrapper'>
            <Link to={"/product/" + props.item.name}>
                <img
                    alt='icon'
                    src={props.item.images[0]}
                    className='img-fluid w-100'
                />
            </Link>
            <div className='div-hover my-3'>
                <span className='product-name'>
                    <Link to={"/product/" + props.item.name}>
                        {props.item.name}{" "}
                    </Link>
                </span>

                <div className='d-flex justify-content-between'>
                    <div className='product-pricing mb-3'>
                        <span className='price'>
                            {format(props.item.price)}
                        </span>
                        {props.item.sale ? (
                            <span className='price-before-sale'>
                                {format(props.item.sale)}
                            </span>
                        ) : null}
                    </div>
                    <div>
                        <Rating value={5} />
                    </div>
                </div>
                <div className='group-img'>
                    <img alt='icon' src={props.item.images[0]} />
                    <img alt='icon' src={props.item.images[1]} />
                    <img alt='icon' src={props.item.images[2]} />
                    <img alt='icon' src={props.item.images[3]} />
                </div>
                <div className='group-size my-2'>
                    <div className='size-item'>XS</div>
                    <div className='size-item'>S</div>
                    <div className='size-item'>M</div>
                    <div className='size-item'>L</div>
                </div>
                <div className='group-button'>
                    <button
                        className='btn-add-to-cart'
                        onClick={() => handleAddToCart(props.item)}>
                        Add to Cart
                    </button>
                    <div className='group-right'>
                        <button className='btn-add-to-wishlist'>
                            <img alt='icon' src={Heart} />
                        </button>
                        <button className='btn-add-to-compare'>
                            <img alt='icon' src={Scale} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
