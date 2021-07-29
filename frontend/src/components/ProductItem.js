import React from 'react'
import Img1 from '../assets/imgs/img1.jpg'
import Img2 from '../assets/imgs/img2.jpg'
import Img3 from '../assets/imgs/img3.jpg'
import Scale from '../assets/imgs/scale.png'
import Heart from "../assets/imgs/heart.png";

import '../assets/css/ProductItem.css'

export default function ProductItem(props) {
    return (
        <div className='product-item-wrapper'>
            <img src={props.img} className='img-fluid' />
            <div className='div-hover my-3'>
                <span className='product-name'>{props.name}</span>
                <div className='product-pricing mb-3'>
                    <span className='price'>{props.price}</span>
                    {props.sale ? (
                        <span className='price-before-sale'>$120</span>
                    ) : null}
                </div>
                <div className='group-img'>
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                    <img src={Img1} />
                </div>
                <div className='group-size my-2'>
                    <div className='size-item'>XS</div>
                    <div className='size-item'>S</div>
                    <div className='size-item'>M</div>
                    <div className='size-item'>L</div>
                </div>
                <div className='group-button'>
                    <button className='btn-add-to-cart'>Add to Cart</button>
                    <div className='group-right'>
                        <button className='btn-add-to-wishlist'>
                            <img src={Heart} />
                        </button>
                        <button className='btn-add-to-compare'>
                            <img src={Scale} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
