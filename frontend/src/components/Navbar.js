import React, { useState, useEffect, useContext } from "react";
import { Container, Col, Row } from "reactstrap";
import "../assets/css/Navbar.css";
import classnames from "classnames";
import { AppContext } from "../contexts/AppProvider";
import { Link } from "react-router-dom";

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
    const [position, setPosition] = useState(0);
    const [count, setCount] = useState(1);
    const subWrapperClassName = classnames("sub-wrapper", { active: isHover });
    const {
        setIsAppHover,
        setIsVisibleSearch,
        setIsVisibleLanguage,
        setIsVisibleLogin,
        setIsVisibleCart,
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

        document.querySelector(
            ".slider-item"
        ).style.marginLeft = `${position}%`;
    }, [position, setIsAppHover]);

    const handleLeftArrow = () => {
        if (count === 1) {
            return;
        }

        setPosition(position + 37);
        setCount(count - 1);
    };

    const handleRightArrow = () => {
        if (count === 3) {
            return;
        }
        setPosition(position - 37);
        setCount(count + 1);
    };

    return (
        <div>
            <div className='nav-wrapper'>
                <Container style={{ maxHeight: "66px" }}>
                    <Row className='nav-container'>
                        <Col xl={3} className='nav-logo'>
                            <span>
                                <Link to='/'>Doba</Link>
                            </span>
                        </Col>
                        <Col xl={6} className='nav-content'>
                            <div className='nav-item'>
                                <Link to="/category/About us">About us</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <Link to="/category/Women">Women</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <Link to="/category/Men">Men</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <Link to="/category/Beauty">Beauty</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <Link to="/category/Accessories">Accessories</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <Link to="/blog">Blog</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                            <div className='nav-item'>
                                <Link to="/contact">Contact</Link>{" "}
                                <img alt='icon' src={UpArrow} />
                            </div>
                        </Col>
                        <Col xl={3} className='nav-right'>
                            <img
                                alt='icon'
                                src={SearchImg}
                                onClick={() => setIsVisibleSearch(true)}
                            />
                            <img
                                alt='icon'
                                src={EarthImg}
                                onClick={() => setIsVisibleLanguage(true)}
                            />
                            <img
                                alt='icon'
                                src={UserImg}
                                onClick={() => setIsVisibleLogin(true)}
                            />
                            <img
                                alt='icon'
                                src={CartImg}
                                onClick={() => setIsVisibleCart(true)}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={subWrapperClassName}>
                <Container>
                    <Row>
                        <Col xl={2} className='sub-item'>
                            <h4>
                                <Link to='/category/tops'>Tops</Link>
                            </h4>
                            <ul>
                                <li>
                                    <Link to='/category/tops/Awesome'>
                                        Awesome
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/tops/Beachwear'>
                                        Beachwear
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/tops/Beige'>Beige</Link>
                                </li>
                                <li>
                                    <Link to='/category/tops/Cool New'>
                                        Cool New
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/tops/Dress'>Dress</Link>
                                </li>
                                <li>
                                    <Link to='/category/tops/Gap'>Gap</Link>
                                </li>
                                <li>
                                    <Link to='/category/tops/Guess'>Guess</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={2} className='sub-item'>
                            <h4>
                                <Link to='/category/bottoms'>Bottoms</Link>
                            </h4>
                            <ul>
                                <li>
                                    <Link to='/category/bottoms/Jeans'>
                                        Jeans
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/bottoms/Lacoste'>
                                        Lacoste
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/bottoms/Levi's">
                                        Levi's
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/bottoms/Model'>
                                        Model
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/bottoms/Nice Featured'>
                                        Nice Featured
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/bottoms/Polo'>
                                        Polo
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/bottoms/Pullover'>
                                        Pullover
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={2} className='sub-item'>
                            <h4>
                                <Link to='/category/accessories'>
                                    Accessories
                                </Link>
                            </h4>
                            <ul>
                                <li>
                                    <Link to='/category/accessories/Sale'>
                                        Scarf Sale 13%
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/accessories/Shirt'>
                                        Shirt
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/accessories/Shoes'>
                                        Shoes
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/accessories/Shorts'>
                                        Shorts
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/accessories/Summer'>
                                        Summer
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/accessories/Sunglasses'>
                                        Sunglasses
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/category/accessories/Vintage'>
                                        Vintage
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={6} className='sub-item'>
                            <div className='carousel-header'>
                                <h4>Best Seller</h4>
                                <div>
                                    <img
                                        alt='icon'
                                        src={LeftArrow}
                                        onClick={() => handleLeftArrow()}
                                    />
                                    <img
                                        alt='icon'
                                        src={RightArrow}
                                        onClick={() => handleRightArrow()}
                                    />
                                </div>
                            </div>
                            <div className='carousel-wrapper'>
                                <div className='slider-item'>
                                    <img alt='icon' src={Img1} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img alt='icon' src={Img2} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img alt='icon' src={Img3} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img alt='icon' src={Img1} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img alt='icon' src={Img2} />
                                    <span>Test</span>
                                    <strong>$ 100</strong>
                                </div>
                                <div className='slider-item'>
                                    <img alt='icon' src={Img3} />
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
