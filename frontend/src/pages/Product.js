import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/Product.css";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Review from "../components/Review";
import Rating from "react-rating-stars-component";
import BreadcrumbBar from "../components/BreadcrumbBar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/actions/product.action";
import { addToCart } from "../redux/actions/cart.action";
import format from "../configs/USDCurrency";

export default function Product() {
    const breadcrumbs = useBreadcrumbs();
    const dispatch = useDispatch();
    const productName =
        breadcrumbs[breadcrumbs.length - 1].breadcrumb.props.children;

    dispatch(getDetailProduct(productName));

    const product = useSelector((state) => state.products.detail_product);


    return (
        <div className='product-page-wrapper'>
            <BreadcrumbBar />
            <div className='title-wrapper'>
                <Container className='h-100'>
                    <Row className='h-100'>
                        <Col xl={4} className='left'>
                            <Rating value={5} />
                            <span>2 Reviews</span>
                        </Col>
                        <Col xl={4} className='middle'>
                            {breadcrumbs[2].breadcrumb}
                        </Col>
                        <Col xl={4} className='right'>
                            <div className='product-status'>
                                <span>SKU:</span>
                                <strong>777</strong>
                                <span className='ms-4'>Availability::</span>
                                <strong>In stock</strong>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='product-wrapper'>
                <Container>
                    <Row>
                        <Col xl={6}>
                            <Row>
                                <Col xl={2}>
                                    <div className='arrow-wrapper mb-3 d-flex justify-content-between'>
                                        <img
                                            alt='icon'
                                            src={
                                                require("../assets/imgs/down-arrow.png")
                                                    .default
                                            }
                                        />
                                        <img
                                            alt='icon'
                                            src={
                                                require("../assets/imgs/up-arrow2.png")
                                                    .default
                                            }
                                        />
                                    </div>
                                    <div className='sub-img-wrapper'>
                                        <img
                                            alt='icon'
                                            className='img-fluid mb-3'
                                            src={product.images[0]}
                                        />
                                        <img
                                            alt='icon'
                                            className='img-fluid mb-3 not-first'
                                            src={product.images[1]}
                                        />
                                        <img
                                            alt='icon'
                                            className='img-fluid mb-3 not-first'
                                            src={product.images[2]}
                                        />
                                        <img
                                            alt='icon'
                                            className='img-fluid not-first'
                                            src={product.images[3]}
                                        />
                                    </div>
                                </Col>
                                <Col xl={9} className='img-wrapper-right'>
                                    <img
                                        alt='icon'
                                        className='img-fluid h-100'
                                        src={product.images[0]}
                                    />
                                    <img
                                        alt='icon'
                                        className='left-arrow'
                                        src={
                                            require("../assets/imgs/left-arrow.png")
                                                .default
                                        }
                                    />
                                    <img
                                        alt='icon'
                                        className='right-arrow'
                                        src={
                                            require("../assets/imgs/right-arrow.png")
                                                .default
                                        }
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6}>
                            <div className='product-color'>
                                <span>color: </span>
                                <strong>Blue</strong>
                            </div>
                            <div className='sub-img-right'>
                                <div className='sub-item'>
                                    <img
                                        alt='icon'
                                        className='img-fluid'
                                        src={product.images[0]}
                                    />
                                </div>
                                <div className='sub-item'>
                                    <img
                                        alt='icon'
                                        className='img-fluid'
                                        src={product.images[1]}
                                    />
                                </div>
                                <div className='sub-item'>
                                    <img
                                        alt='icon'
                                        className='img-fluid'
                                        src={product.images[2]}
                                    />
                                </div>
                                <div className='sub-item'>
                                    <img
                                        alt='icon'
                                        className='img-fluid'
                                        src={product.images[3]}
                                    />
                                </div>
                            </div>

                            <div className='product-color'>
                                <span>size: </span>
                                <strong>S</strong>
                            </div>
                            <div className='size-guide'>
                                <img
                                    alt='icon'
                                    src={
                                        require("../assets/imgs/hook.png")
                                            .default
                                    }
                                />
                                <span>Size guide</span>
                            </div>
                            <hr />
                            <div className='product-price'>
                                <span>{format(product.price)}</span>
                                <div className='group-button'>
                                    <button
                                        className='btn-add-to-cart'
                                        onClick={() =>
                                            dispatch(addToCart(product))
                                        }>
                                        Add to Cart
                                    </button>
                                    <div className='group-right'>
                                        <button className='btn-add-to-wishlist'>
                                            <img
                                                alt='icon'
                                                src={
                                                    require("../assets/imgs/heart.png")
                                                        .default
                                                }
                                            />
                                        </button>
                                        <button className='btn-add-to-compare'>
                                            <img
                                                alt='icon'
                                                src={
                                                    require("../assets/imgs/scale.png")
                                                        .default
                                                }
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='service'>
                                <div className='service-item'>
                                    <img
                                        alt='icon'
                                        src={
                                            require("../assets/imgs/truck2.png")
                                                .default
                                        }
                                    />
                                    <span>Shipping & Delivery</span>
                                </div>
                                <div className='service-item'>
                                    <img
                                        alt='icon'
                                        src={
                                            require("../assets/imgs/refresh2.png")
                                                .default
                                        }
                                    />
                                    <span>Returns & Exchanges</span>
                                </div>
                                <div className='service-item'>
                                    <img
                                        alt='icon'
                                        src={
                                            require("../assets/imgs/email2.png")
                                                .default
                                        }
                                    />
                                    <span>Ask a question</span>
                                </div>
                            </div>
                            <div className='guaranteed mt-3'>
                                <Row className='align-items-center'>
                                    <Col xl={5}>
                                        <span>guaranteed safe checkout</span>
                                    </Col>
                                    <Col xl={7}>
                                        <div className='line'></div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='group-delivery mt-3'>
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/stripe.png")
                                            .default
                                    }
                                />
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/aes.png")
                                            .default
                                    }
                                />
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/paypal.png")
                                            .default
                                    }
                                />
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/visa.png")
                                            .default
                                    }
                                />
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/mastercard.png")
                                            .default
                                    }
                                />
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/discover.png")
                                            .default
                                    }
                                />
                                <img
                                    alt='icon'
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/american-express.png")
                                            .default
                                    }
                                />
                            </div>
                            <hr />
                            <div className='description-wrapper'>
                                <span className='title'>Description</span>
                            </div>
                            <hr />
                            <div className='additional-info'>
                                <div className='mb-3'>
                                    <span className='title mb-3'>
                                        Additional Information
                                    </span>
                                </div>
                                <strong>Color: </strong>
                                <span>Blue, White, Black, Grey</span>
                                <br />
                                <strong>Size: </strong>
                                <span>XS, S, M, L</span>
                                <br />
                                <strong>Material: </strong>
                                <span>100% Polyester</span>
                            </div>
                            <hr />
                            <Review />
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
