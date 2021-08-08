import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/NewsBanner.css";

export default function NewsBanner() {
    return (
        <Container className='news-banner-wrapper my-5'>
            <Row>
                <Col xl={6} className='news-banner-item'>
                    <img
                        className='img-fluid w-100'
                        src={require("../assets/imgs/home-banner1.png").default}
                    />
                    <div className='news-content'>
                        <span>New Season</span>
                        <br />
                        <span>lookbook collection</span>
                    </div>
                </Col>
                <Col xl={6} className='news-banner-item'>
                    <img
                        className='img-fluid w-100'
                        src={require("../assets/imgs/home-banner2.png").default}
                    />
                    <div className='news-content'>
                        <span>Sale</span>
                        <br />
                        <span>
                            Get UP to <strong>50% off</strong>
                        </span>
                    </div>
                </Col>
            </Row>
            <div className='my-5 w-100 subscribe-wrapper'>
                <img
                    className='img-fluid w-100'
                    src={require("../assets/imgs/home-banner3.png").default}
                />
                <div className='subscribe-form'>
                    <span>Special Offer</span>
                    <br />
                    <span>Subscribe</span>
                    <br />
                    <span>
                        And Get <strong>10% Off</strong>
                    </span>
                    <br />
                    <input
                        type='text'
                        placeholder='Enter your email'
                        className='mt-4'
                    />
                    <br />
                    <button className="mt-4">Subscribe</button>
                </div>
                <img className="img-fluid female" src={require('../assets/imgs/female-banner.png').default}/>
                <img className="img-fluid male" src={require('../assets/imgs/male-banner.png').default}/>
            </div>
        </Container>
    );
}
