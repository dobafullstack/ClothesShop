import React from "react";
import { Col, Row, Container } from "reactstrap";
import "../assets/css/Banner.css";

import BannerLeftImg from "../assets/imgs/banner-left.jpg";
import BannerRight1Img from "../assets/imgs/banner-right1.jpg";
import BannerRight2Img from "../assets/imgs/banner-right2.jpg";
import BannerRight3Img from "../assets/imgs/banner-right3.jpg";
import LeftArrowImg from "../assets/imgs/left-arrow.png";
import RightArrowImg from "../assets/imgs/right-arrow.png";

export default function Banner() {
    return (
        <Container className='mt-4'>
            <Row>
                <Col xl={6}>
                    <div className='banner-left position-relative'>
                        <img src={BannerLeftImg} className='img-fluid w-100' />
                        <img src={LeftArrowImg} className='arrow left' />
                        <img src={RightArrowImg} className='arrow right' />
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
                        <Col xl={6} className="position-relative banner-right-wrapper">
                            <img
                                src={BannerRight1Img}
                                className='img-fluid w-100'
                            />
                            <div className='banner-name'>
                                <span>Women</span>
                            </div>
                        </Col>
                        <Col xl={6} className="position-relative banner-right-wrapper">
                            <img
                                src={BannerRight2Img}
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
                        <Col xl={12} className="position-relative banner-right-wrapper">
                            <img
                                src={BannerRight3Img}
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
