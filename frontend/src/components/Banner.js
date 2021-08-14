import React from "react";
import { Col, Row, Container } from "reactstrap";
import "../assets/css/Banner.css";

export default function Banner() {
    return (
        <Container className='mt-4'>
            <Row>
                <Col xl={6}>
                    <div className='banner-left position-relative'>
                        <img
                            alt='icon'
                            src={
                                require("../assets/imgs/banner-left.jpg")
                                    .default
                            }
                            className='img-fluid w-100'
                        />
                        <img
                            alt='icon'
                            src={
                                require("../assets/imgs/left-arrow.png").default
                            }
                            className='arrow left'
                        />
                        <img
                            alt='icon'
                            src={
                                require("../assets/imgs/right-arrow.png")
                                    .default
                            }
                            className='arrow right'
                        />
                        <div className='banner-content'>
                            <span>Banner</span>
                            <span className='banner-title'>
                                Your title text
                            </span>
                        </div>
                    </div>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col
                            xl={6}
                            className='position-relative banner-right-wrapper'>
                            <img
                                alt='icon'
                                src={
                                    require("../assets/imgs/banner-right1.jpg")
                                        .default
                                }
                                className='img-fluid w-100'
                            />
                            <div className='banner-name'>
                                <span>Women</span>
                            </div>
                        </Col>
                        <Col
                            xl={6}
                            className='position-relative banner-right-wrapper'>
                            <img
                                alt='icon'
                                src={
                                    require("../assets/imgs/banner-right2.jpg")
                                        .default
                                }
                                className='img-fluid w-100'
                            />
                            <div className='banner-name'>
                                <span>Men</span>
                            </div>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            marginTop: "1.8rem",
                        }}>
                        <Col
                            xl={12}
                            className='position-relative banner-right-wrapper'>
                            <img
                                alt='icon'
                                src={
                                    require("../assets/imgs/banner-right3.jpg")
                                        .default
                                }
                                className='img-fluid w-100'
                            />
                            <div className='banner-name'>
                                <span>Accessories</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
