import React from "react";
import { Row, Col } from "reactstrap";

import RemoveImg from "../assets/imgs/remove.png";
import format from "../configs/USDCurrency";
import { updateCart, removeCart } from "../redux/actions/cart.action";
import { useDispatch } from "react-redux";

export default function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();

    return (
        <div className='cart-item'>
            <Row>
                <Col xl={3}>
                    <img
                        alt='icon'
                        src={item.product.images[0]}
                        className='img-fluid'
                    />
                </Col>
                <Col xl={9} className='right-side'>
                    <div>
                        <span className='product-name'>
                            {item.product.name}
                        </span>
                        <br />
                        <span className='product-size'>Blue, S</span>
                    </div>
                    <div className='right-side-bottom'>
                        <div className='d-flex align-items-center'>
                            <div className='counter'>
                                <div
                                    className='minus'
                                    onClick={() => {
                                        if (item.count === 1) {
                                            return;
                                        }
                                        dispatch(updateCart(-1, item.product));
                                    }}>
                                    -
                                </div>
                                <div className='count-value'>{item.count}</div>
                                <div
                                    className='plus'
                                    onClick={() =>
                                        dispatch(updateCart(1, item.product))
                                    }>
                                    +
                                </div>
                            </div>
                            <span className='product-price'>
                                {format(item.product.price * item.count)}
                            </span>
                        </div>
                        <img alt='icon' src={RemoveImg} onClick={() => dispatch(removeCart(item.product, item.count))} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}
