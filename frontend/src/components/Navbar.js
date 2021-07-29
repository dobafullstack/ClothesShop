import React, { useState, useEffect, useContext } from "react";
import { Container, Col, Row } from "reactstrap";
import "../assets/css/Navbar.css";
import classnames from "classnames";
import {AppContext} from '../contexts/AppProvider'

import SearchImg from "../assets/imgs/search.png";
import EarthImg from "../assets/imgs/earth.png";
import UserImg from "../assets/imgs/user.png";
import CartImg from "../assets/imgs/cart.png";
import UpArrow from "../assets/imgs/up-arrow.png";
import LeftArrow from "../assets/imgs/left-arrow.png";
import RightArrow from "../assets/imgs/right-arrow.png";
import Img1 from "../assets/imgs/img1.jpg";
import Img2 from "../assets/imgs/img2.jpg";
import Img3 from "../assets/imgs/img3.jpg";

export default function Navbar() {
    const [isHover, setIsHover] = useState(false);
    const [position, setPosition] = useState(0)
    const [count, setCount] = useState(1)
    const subWrapperClassName = classnames("sub-wrapper", { active: isHover });
    const layoutClassName = classnames("layout", { active: isHover });
    const {
        setIsAppHover,
        setIsVisibleSearch,
        setIsVisibleLanguage,
        setIsVisibleLogin,
        setIsVisibleCart,
        setIsVisibleSidebar
    } = useContext(AppContext);

    useEffect(() => {
        const nav_item = document.getElementsByClassName("nav-item");
        const subItem = document.getElementsByClassName("sub-item");

        for (let i = 0; i < nav_item.length; i++) {
            if (i === 1 || i === 2) {
                nav_item[i].addEventListener("mouseenter", (e) => {
                    setIsHover(true);
                    setIsAppHover(true);
                });
                nav_item[i].addEventListener("mouseleave", (e) => {
                    setIsHover(false);
                    setIsAppHover(false);
                });
            }
        }
        for (let i = 0; i < subItem.length; i++) {
            subItem[i].addEventListener("mouseenter", (e) => {
                setIsHover(true);
                setIsAppHover(true);
            });
            subItem[i].addEventListener("mouseleave", (e) => {
                setIsHover(false);
                setIsAppHover(false);
            });
        }

        document.querySelector(".slider-item").style.marginLeft = `${position}%`;
    }, [position]);

    const handleLeftArrow = () => {
        if (count === 1){
            return;
        }

        setPosition(position + 37);
        setCount(count - 1);
    }

    const handleRightArrow = () => {
        if (count === 3){
            return;
        }
        setPosition(position - 37)
        setCount(count + 1)
    }


    return (
        <div>
            <div className='nav-wrapper'>
                <Container style={{ maxHeight: "66px" }}>
                    <Row className='nav-container'>
                        <Col xl={3} className='nav-logo'>
                            <span>Doba</span>
                        </Col>
                        <Col xl={6} className='nav-content'>
                            <div className='nav-item'>
                                <span>About us</span> <img src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <span>Women</span> <img src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <span>Men</span> <img src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <span>Beauty</span> <img src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <span>Accessories</span> <img src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <span>Blog</span> <img src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <span>Contact</span> <img src={UpArrow} />
                            </div>
                        </Col>
                        <Col xl={3} className='nav-right'>
                            <img src={SearchImg} onClick={() => setIsVisibleSearch(true)}/>
                            <img src={EarthImg} onClick={() => setIsVisibleLanguage(true)}/>
                            <img src={UserImg} onClick={() => setIsVisibleLogin(true)}/>
                            <img src={CartImg} onClick={() => setIsVisibleCart(true)}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={subWrapperClassName}>
                <Container>
                    <Row>
                        <Col xl={2} className='sub-item'>
                            <h4>Tops</h4>
                            <ul>
                                <li>Awesome</li>
                                <li>Beachwear</li>
                                <li>Beige</li>
                                <li>Cool New</li>
                                <li>Dress</li>
                                <li>Gap</li>
                                <li>Guess</li>
                            </ul>
                        </Col>
                        <Col xl={2} className='sub-item'>
                            <h4>Bottoms</h4>
                            <ul>
                                <li>Jeans</li>
                                <li>Lacoste</li>
                                <li>Levi's</li>
                                <li>Model</li>
                                <li>Nice Featured</li>
                                <li>Polo</li>
                                <li>Pullover</li>
                            </ul>
                        </Col>
                        <Col xl={2} className='sub-item'>
                            <h4>Accessories</h4>
                            <ul>
                                <li>Scarf Sale 13%</li>
                                <li>Shirt</li>
                                <li>Shoes</li>
                                <li>Shorts</li>
                                <li>Summer</li>
                                <li>Sunglasses</li>
                                <li>Vintage</li>
                            </ul>
                        </Col>
                        <Col xl={6} className='sub-item'>
                            <div className='carousel-header'>
                                <h4>Best Seller</h4>
                                <div>
                                    <img
                                        src={LeftArrow}
                                        onClick={() =>
                                            handleLeftArrow()
                                        }
                                    />
                                    <img
                                        src={RightArrow}
                                        onClick={() =>
                                            handleRightArrow()
                                        }
                                    />
                                </div>
                            </div>
                            <div className='carousel-wrapper'>
                                <div className='slider-item'>
                                    <img src={Img1} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img src={Img2} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img src={Img3} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img src={Img1} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img src={Img2} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img src={Img3} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
