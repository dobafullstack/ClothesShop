import React from "react";
import { Container, Col, Row } from "reactstrap";
import '../assets/css/TopBar.css'

import PhoneImg from "../assets/imgs/phone.png";
import LocationImg from "../assets/imgs/location-marker.png";
import ClockImg from "../assets/imgs/clock.png";
import FacebookImg from "../assets/imgs/facebook.png";
import TwitterImg from "../assets/imgs/twitter.png";
import PinterestImg from "../assets/imgs/pinterest.png";
import InstagramImg from "../assets/imgs/instagram.png";

export default function TopBar() {
    return (
        <Container fluid className='topbar-wrapper'>
            <Container>
                <Row className='topbar-container'>
                    <Col
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        sm={6}
                        className='top-left'>
                        <Row className='left-container'>
                            <Col
                                xl={4}
                                lg={4}
                                md={4}
                                sm={4}
                                sm={4}
                                className='left-item'>
                                <img src={PhoneImg} />
                                <span>+84 944609933</span>
                            </Col>
                            <Col
                                xl={4}
                                lg={4}
                                md={4}
                                sm={4}
                                sm={4}
                                className='left-item'>
                                <img src={LocationImg} />
                                <span>Ho Chi Minh, Viet Nam</span>
                            </Col>
                            <Col
                                xl={4}
                                lg={4}
                                md={4}
                                sm={4}
                                sm={4}
                                className='left-item'>
                                <img src={ClockImg} />
                                <span>All week 24/7</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        sm={6}
                        className='top-right'>
                        <Row className='right-container'>
                            <Col xl={12} className='right-item'>
                                <img src={FacebookImg} />
                                <img src={TwitterImg} />
                                <img src={PinterestImg} />
                                <img src={InstagramImg} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
