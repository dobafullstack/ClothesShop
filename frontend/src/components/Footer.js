import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import '../assets/css/Footer.css'

import FacebookImg from "../assets/imgs/facebook.png";
import TwitterImg from "../assets/imgs/twitter.png";
import PinterestImg from "../assets/imgs/pinterest.png";
import InstagramImg from "../assets/imgs/instagram.png";
import LocationImg from "../assets/imgs/location2.png";
import PhoneImg from "../assets/imgs/phone2.png";
import ClockImg from "../assets/imgs/clock2.png";
import EmailImg from "../assets/imgs/email.png";
import StripeImg from '../assets/imgs/Stripe_x42.png'
import AESImg from '../assets/imgs/AES256_x42.png'
import PaypalImg from '../assets/imgs/paypal_2_x42.png'
import VisaImg from '../assets/imgs/visa_x42.png'
import MasterCardImg from '../assets/imgs/mastercard_x42.png'
import DiscoverImg from '../assets/imgs/discover_x42.png'
import AmericanImg from '../assets/imgs/american-express_x42.png'


export default function Footer() {
    return (
        <div>
            <div className='footer-top' style={{marginTop: '5%'}}>
                <Container>
                    <Row>
                        <Col xl={4} className='left'>
                            BE IN TOUCH WITH US:
                        </Col>
                        <Col xl={4} className='middle'>
                            <input type='text' placeholder='Enter your email' />
                            <button>JOIN US</button>
                        </Col>
                        <Col xl={4} className='right'>
                            <img alt="icon" src={FacebookImg} />
                            <img alt="icon" src={TwitterImg} />
                            <img alt="icon" src={PinterestImg} />
                            <img alt="icon" src={InstagramImg} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-body'>
                <Container>
                    <Row>
                        <Col xl={3}>
                            <h4>Categories</h4>
                            <ul>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Accessories</li>
                                <li>Beauty</li>
                            </ul>
                        </Col>
                        <Col xl={3}>
                            <h4>Categories</h4>
                            <ul>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Accessories</li>
                                <li>Beauty</li>
                            </ul>
                        </Col>
                        <Col xl={3}>
                            <h4>Categories</h4>
                            <ul>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Accessories</li>
                                <li>Beauty</li>
                            </ul>
                        </Col>
                        <Col xl={3}>
                            <h4>Categories</h4>
                            <ul>
                                <li>
                                    <img alt="icon" src={LocationImg} />
                                    <span>Ho Chi Minh, Viet Nam</span>
                                </li>
                                <li>
                                    <img alt="icon" src={PhoneImg} />
                                    <span>+84 944609933</span>
                                </li>
                                <li>
                                    <img alt="icon" src={ClockImg} />
                                    <span>All week 24/7</span>
                                </li>
                                <li>
                                    <img alt="icon" src={EmailImg} />
                                    <span>dobadov3@gmail.com</span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-bottom'>
                <Container>
                    <Row>
                        <Col xl={4} className='left'>
                            Copyright © 2021 all rights reserved
                        </Col>
                        <Col xl={4} className='middle'>
                            <img alt="icon" src={StripeImg} />
                            <img alt="icon" src={AESImg} />
                            <img alt="icon" src={PaypalImg} />
                            <img alt="icon" src={VisaImg} />
                            <img alt="icon" src={MasterCardImg} />
                            <img alt="icon" src={DiscoverImg} />
                            <img alt="icon" src={AmericanImg} />
                        </Col>
                        <Col xl={4} className='right'>
                            Designed by <strong>Oleh Chabanov</strong>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
