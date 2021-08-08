import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../assets/css/Blog.css'

export default function Blog() {
    return (
        <Container className='blog-wrapper my-5'>
            <div className='blog-header mb-4'>
                <span>LATEST FROM BLOG</span>
                <span>SEE ALL</span>
            </div>
            <div className='blog-content'>
                <Row>
                    <Col xl={4} className='blog-item'>
                        <img
                            className='img-fluid w-100'
                            src={require("../assets/imgs/blog1.jpg").default}
                        />
                        <div className='blog-description'>
                            <span className='blog-title'>
                                The Easiest Way to Break
                            </span>
                            <br />
                            <span className='blog-content'>
                                But I must explain to you how all this mistaken
                                idea of denouncing pleas and praising pain was
                                bor
                            </span>
                        </div>
                    </Col>
                    <Col xl={4} className='blog-item'>
                        <img
                            className='img-fluid w-100'
                            src={require("../assets/imgs/blog2.jpg").default}
                        />
                        <div className='blog-description'>
                            <span className='blog-title'>Wedding Season</span>
                            <br />
                            <span className='blog-content'>
                                But I must explain to you how all this mistaken
                                idea of denouncing pleas and praising pain was
                                bor
                            </span>
                        </div>
                    </Col>
                    <Col xl={4} className='blog-item'>
                        <img
                            className='img-fluid w-100'
                            src={require("../assets/imgs/blog3.jpg").default}
                        />
                        <div className='blog-description'>
                            <span className='blog-title'>
                                Recent Favorites On Repeat
                            </span>
                            <br />
                            <span className='blog-content'>
                                But I must explain to you how all this mistaken
                                idea of denouncing pleas and praising pain was
                                bor
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
