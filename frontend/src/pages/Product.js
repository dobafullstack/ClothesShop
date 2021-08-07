import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/Product.css";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Review from "../components/Review";
import Rating from "react-rating-stars-component";
import BreadcrumbBar from "../components/BreadcrumbBar";

export default function Product() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className='product-page-wrapper'>
            <BreadcrumbBar />
            <div className='title-wrapper'>
                <Container className='h-100'>
                    <Row className='h-100'>
                        <Col xl={4} className='left'>
                            <Rating value={5}/> 
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
                                            src={
                                                require("../assets/imgs/down-arrow.png")
                                                    .default
                                            }
                                        />
                                        <img
                                            src={
                                                require("../assets/imgs/up-arrow2.png")
                                                    .default
                                            }
                                        />
                                    </div>
                                    <div className='sub-img-wrapper'>
                                        <img
                                            className='img-fluid mb-3'
                                            src={
                                                require("../assets/imgs/products/male1.jpg")
                                                    .default
                                            }
                                        />
                                        <img
                                            className='img-fluid mb-3 not-first'
                                            src={
                                                require("../assets/imgs/products/male2.jpg")
                                                    .default
                                            }
                                        />
                                        <img
                                            className='img-fluid mb-3 not-first'
                                            src={
                                                require("../assets/imgs/products/male3.jpg")
                                                    .default
                                            }
                                        />
                                        <img
                                            className='img-fluid not-first'
                                            src={
                                                require("../assets/imgs/products/male4.jpg")
                                                    .default
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col xl={9} className='img-wrapper-right'>
                                    <img
                                        className='img-fluid h-100'
                                        src={
                                            require("../assets/imgs/products/male1.jpg")
                                                .default
                                        }
                                    />
                                    <img
                                        className='left-arrow'
                                        src={
                                            require("../assets/imgs/left-arrow.png")
                                                .default
                                        }
                                    />
                                    <img
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
                                        className='img-fluid'
                                        src={
                                            require("../assets/imgs/products/male1.jpg")
                                                .default
                                        }
                                    />
                                </div>
                                <div className='sub-item'>
                                    <img
                                        className='img-fluid'
                                        src={
                                            require("../assets/imgs/products/male2.jpg")
                                                .default
                                        }
                                    />
                                </div>
                                <div className='sub-item'>
                                    <img
                                        className='img-fluid'
                                        src={
                                            require("../assets/imgs/products/male3.jpg")
                                                .default
                                        }
                                    />
                                </div>
                                <div className='sub-item'>
                                    <img
                                        className='img-fluid'
                                        src={
                                            require("../assets/imgs/products/male4.jpg")
                                                .default
                                        }
                                    />
                                </div>
                            </div>

                            <div className='product-color'>
                                <span>size: </span>
                                <strong>S</strong>
                            </div>
                            <div className='size-guide'>
                                <img
                                    src={
                                        require("../assets/imgs/hook.png")
                                            .default
                                    }
                                />
                                <span>Size guide</span>
                            </div>
                            <hr />
                            <div className='product-price'>
                                <span>300$</span>
                                <div className='group-button'>
                                    <button className='btn-add-to-cart'>
                                        Add to Cart
                                    </button>
                                    <div className='group-right'>
                                        <button className='btn-add-to-wishlist'>
                                            <img
                                                src={
                                                    require("../assets/imgs/heart.png")
                                                        .default
                                                }
                                            />
                                        </button>
                                        <button className='btn-add-to-compare'>
                                            <img
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
                                        src={
                                            require("../assets/imgs/truck2.png")
                                                .default
                                        }
                                    />
                                    <span>Shipping & Delivery</span>
                                </div>
                                <div className='service-item'>
                                    <img
                                        src={
                                            require("../assets/imgs/refresh2.png")
                                                .default
                                        }
                                    />
                                    <span>Returns & Exchanges</span>
                                </div>
                                <div className='service-item'>
                                    <img
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
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/stripe.png")
                                            .default
                                    }
                                />
                                <img
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/aes.png")
                                            .default
                                    }
                                />
                                <img
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/paypal.png")
                                            .default
                                    }
                                />
                                <img
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/visa.png")
                                            .default
                                    }
                                />
                                <img
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/mastercard.png")
                                            .default
                                    }
                                />
                                <img
                                    className='img-fluid'
                                    src={
                                        require("../assets/imgs/discover.png")
                                            .default
                                    }
                                />
                                <img
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
