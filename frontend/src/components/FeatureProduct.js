import React from "react";
import { Container, Col, Row } from "reactstrap";
import ProductItem from "./ProductItem";
import "../assets/css/FeatureProduct.css";
import format from "../configs/USDCurrency";
import ReactLoading from "react-loading";

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
                    {props.items.map((item, index) => (
                        <Col xl={3} key={index}>
                            <ProductItem item={item} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div className='feature-bottom'>
                <button className='btn-seeAll'>See All</button>
            </div>
        </Container>
    );
}
