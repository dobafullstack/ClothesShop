import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import ProductItem from './ProductItem'
import '../assets/css/FeatureProduct.css'

import Img1 from "../assets/imgs/img1.jpg";
import Img2 from "../assets/imgs/img2.jpg";
import Img3 from "../assets/imgs/img3.jpg";

export default function FeatureProduct(props) {
    return (
        <Container className='my-5'>
            <div className='feature-top'>
                <span className='title'>{props.title}</span>
                <div className='feature-filter'>
                    <span className='filter-item active'>new arrivals</span>
                    <span className='filter-item'>specials</span>
                    <span className='filter-item'>bestseller</span>
                    <span className='filter-item'>most viewed</span>
                    <span className='filter-item'>featured products</span>
                </div>
            </div>
            <div className='feature-body'>
                <Row>
                    <Col xl={3}>
                        <ProductItem
                            img={Img1}
                            name="This is the product's name"
                            price='$100'
                            sale='$120'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img2}
                            name="This is the product's name"
                            price='$100'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img3}
                            name="This is the product's name"
                            price='$100'
                            sale='$120'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img1}
                            name="This is the product's name"
                            price='$100'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img1}
                            name="This is the product's name"
                            price='$100'
                            sale='$120'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img2}
                            name="This is the product's name"
                            price='$100'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img3}
                            name="This is the product's name"
                            price='$100'
                            sale='$120'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img1}
                            name="This is the product's name"
                            price='$100'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img1}
                            name="This is the product's name"
                            price='$100'
                            sale='$120'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img2}
                            name="This is the product's name"
                            price='$100'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img3}
                            name="This is the product's name"
                            price='$100'
                            sale='$120'
                        />
                    </Col>
                    <Col xl={3}>
                        <ProductItem
                            img={Img1}
                            name="This is the product's name"
                            price='$100'
                        />
                    </Col>
                </Row>
            </div>
            <div className='feature-bottom'>
                <button className='btn-seeAll'>See All</button>
            </div>
        </Container>
    );
}
