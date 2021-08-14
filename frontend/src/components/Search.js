import React from "react";
import { Row, Col } from "reactstrap";
import "../assets/css/Search.css";

import Img1 from "../assets/imgs/img1.jpg";
import Img2 from "../assets/imgs/img2.jpg";

export default function Search() {
    return (
        <div className='search-wrapper'>
            <div className='filter'>
                <div className='w-100 custom-select'>
                    <select className='select-category w-100'>
                        <option>All Categories</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <i class='fal fa-chevron-down'></i>
                </div>
                <input type='text' placeholder='What are you Looking for?' />
            </div>
            <div className='item-wrapper'>
                <h6>Need some inspiration?</h6>
                <div className='item-search-wrapper'>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img1} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                    <Row className='search-item'>
                        <Col xl={3}>
                            <img alt="icon" src={Img2} className='img-fluid' />
                        </Col>
                        <Col xl={9} className='d-flex flex-column'>
                            <span className='product-name'>
                                Women's tracksuit Q109
                            </span>
                            <span className='product-price'>$379.99</span>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
