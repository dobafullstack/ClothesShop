import React from "react";
import { Row, Container, Col } from "reactstrap";
import "../assets/css/Cart.css";

import Img1 from "../assets/imgs/img1.jpg";
import Img2 from "../assets/imgs/img2.jpg";
import RemoveImg from "../assets/imgs/remove.png";

export default function Cart() {
    return (
        <div className='cart-wrapper'>
            <div className='item-wrapper'>
                <div className='cart-item'>
                    <Row>
                        <Col xl={3}>
                            <img src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='right-side'>
                            <div>
                                <span className='product-name'>
                                    Women's tracksuit Q109
                                </span>
                                <br />
                                <span className='product-size'>Blue, S</span>
                            </div>
                            <div className='right-side-bottom'>
                                <div className='d-flex align-items-center'>
                                    <div className='counter'>
                                        <div className='minus'>-</div>
                                        <div className='count-value'>1</div>
                                        <div className='plus'>+</div>
                                    </div>
                                    <span className='product-price'>100$</span>
                                </div>
                                <img src={RemoveImg} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='cart-item'>
                    <Row>
                        <Col xl={3}>
                            <img src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='right-side'>
                            <div>
                                <span className='product-name'>
                                    Mercury Tee
                                </span>
                                <br />
                                <span className='product-size'>White, S</span>
                            </div>
                            <div className='right-side-bottom'>
                                <div className='d-flex align-items-center'>
                                    <div className='counter'>
                                        <div className='minus'>-</div>
                                        <div className='count-value'>1</div>
                                        <div className='plus'>+</div>
                                    </div>
                                    <span className='product-price'>100$</span>
                                </div>
                                <img src={RemoveImg} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='cart-bottom'>
                <div className='total-price'>
                    <span className='total-text'>Total</span>
                    <span className='total-price'>200$</span>
                </div>
                <button className='btn-checkout'>check out</button>
                <button className='btn-view-cart'>view cart</button>
            </div>
        </div>
    );
}
