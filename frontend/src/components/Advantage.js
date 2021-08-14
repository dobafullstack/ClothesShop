import React from "react";
import { Container, Col, Row } from "reactstrap";
import "../assets/css/Advantage.css";

import TruckImg from "../assets/imgs/truck.png";
import RefreshImg from "../assets/imgs/refresh.png";
import SupportImg from "../assets/imgs/support.png";

export default function Advantage() {
    return (
        <div style={{ borderBottom: "2px solid #F8F8F8" }}>
            <Container>
                <Row className='advantage-wrapper'>
                    <Col xl={4} className='advantage-item'>
                        <img alt="icon" src={TruckImg} />
                        <div className='text-wrapper'>
                            <h6>Free Shipping</h6>
                            <span>On all UA order or order above $100</span>
                        </div>
                    </Col>
                    <Col xl={4} className='advantage-item'>
                        <img alt="icon" src={RefreshImg} />
                        <div className='text-wrapper'>
                            <h6>30 DAYS RETURN</h6>
                            <span>
                                Simply return it within 30 days for an exchange
                            </span>
                        </div>
                    </Col>
                    <Col xl={4} className='advantage-item'>
                        <img alt="icon" src={SupportImg} />
                        <div className='text-wrapper'>
                            <h6>SUPPORT 24/7</h6>
                            <span>
                                Contact us 24 hours a day, 7 days a week
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
