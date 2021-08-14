import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/Filter.css";
import classNames from "classnames";

export default function Filter() {
    const [isVisibleFilter, setIsVisibleFilter] = useState(false);

    const filterOptionClassname = classNames("filter-option", {
        active: isVisibleFilter,
    });

    return (
        <Container>
            <div className='filter-header d-flex justify-content-between align-items-center'>
                <div>
                    <img
                        alt='icon'
                        src={require("../assets/imgs/filter.png").default}
                        className='me-2'
                        onClick={() => setIsVisibleFilter(!isVisibleFilter)}
                    />
                    <span onClick={() => setIsVisibleFilter(!isVisibleFilter)}>
                        Filter
                    </span>
                </div>
                <div className='d-flex'>
                    <img
                        alt='icon'
                        className='me-4'
                        src={require("../assets/imgs/list-item.png").default}
                    />
                    <img
                        alt='icon'
                        src={require("../assets/imgs/group-item.png").default}
                    />
                </div>
                <div>
                    <span className='best-seller me-1'>Bestseller</span>
                    <img
                        alt='icon'
                        src={require("../assets/imgs/down-arrow.png").default}
                    />
                </div>
            </div>
            <div className={filterOptionClassname}>
                <Row>
                    <Col xl={3}>
                        <span className='filter-option-title'>color</span>
                        <div className='color-item d-flex align-items-center'>
                            <div className='black me-2'></div>
                            <span>Black</span>
                        </div>
                        <div className='color-item d-flex align-items-center'>
                            <div className='cyan me-2'></div>
                            <span>Cyan</span>
                        </div>
                        <div className='color-item d-flex align-items-center'>
                            <div className='green me-2'></div>
                            <span>green</span>
                        </div>
                        <div className='color-item d-flex align-items-center'>
                            <div className='grey me-2'></div>
                            <span>grey</span>
                        </div>
                        <div className='color-item d-flex align-items-center'>
                            <div className='pink me-2'></div>
                            <span>Pink</span>
                        </div>
                        <div className='color-item d-flex align-items-center'>
                            <div className='white me-2'></div>
                            <span>White</span>
                        </div>
                        <div className='color-item d-flex align-items-center'>
                            <div className='blue me-2'></div>
                            <span>Blue</span>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <span className='filter-option-title'>size</span>
                        <div className='size-item d-flex align-items-center'>
                            <input name='size' value='XL' type='checkbox' />
                            <span className='ms-2'>XL</span>
                        </div>
                        <div className='size-item d-flex align-items-center'>
                            <input name='size' value='L' type='checkbox' />
                            <span className='ms-2'>L</span>
                        </div>
                        <div className='size-item d-flex align-items-center'>
                            <input name='size' value='M' type='checkbox' />
                            <span className='ms-2'>M</span>
                        </div>
                        <div className='size-item d-flex align-items-center'>
                            <input name='size' value='S' type='checkbox' />
                            <span className='ms-2'>S</span>
                        </div>
                        <div className='size-item d-flex align-items-center'>
                            <input name='size' value='XS' type='checkbox' />
                            <span className='ms-2'>XS</span>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <span className='filter-option-title'>brand</span>
                        <div className='brand-item d-flex align-items-center'>
                            <input name='brand' value='Ck' type='checkbox' />
                            <span className='ms-2'>Ck</span>
                        </div>
                        <div className='brand-item d-flex align-items-center'>
                            <input name='brand' value='H&M' type='checkbox' />
                            <span className='ms-2'>H&M</span>
                        </div>
                        <div className='brand-item d-flex align-items-center'>
                            <input
                                name='brand'
                                value='Kalles'
                                type='checkbox'
                            />
                            <span className='ms-2'>Kalles</span>
                        </div>
                        <div className='brand-item d-flex align-items-center'>
                            <input
                                name='brand'
                                value="Levi's"
                                type='checkbox'
                            />
                            <span className='ms-2'>Levi's</span>
                        </div>
                        <div className='brand-item d-flex align-items-center'>
                            <input name='brand' value='Monki' type='checkbox' />
                            <span className='ms-2'>Monki</span>
                        </div>
                        <div className='brand-item d-flex align-items-center'>
                            <input name='brand' value='Nike' type='checkbox' />
                            <span className='ms-2'>Nike</span>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <span className='filter-option-title'>price</span>
                        <div className='price-item d-flex align-items-center'>
                            <input name='price' value='1200' type='checkbox' />
                            <span className='ms-2'>$1200+</span>
                        </div>
                        <div className='price-item d-flex align-items-center'>
                            <input
                                name='price'
                                value='600_1200'
                                type='checkbox'
                            />
                            <span className='ms-2'>$600-$1200</span>
                        </div>
                        <div className='price-item d-flex align-items-center'>
                            <input
                                name='price'
                                value='300_600'
                                type='checkbox'
                            />
                            <span className='ms-2'>$300-$600</span>
                        </div>
                        <div className='price-item d-flex align-items-center'>
                            <input
                                name='price'
                                value='150_300'
                                type='checkbox'
                            />
                            <span className='ms-2'>$150-$300</span>
                        </div>
                        <div className='price-item d-flex align-items-center'>
                            <input
                                name='price'
                                value='50_150'
                                type='checkbox'
                            />
                            <span className='ms-2'>$50-$150</span>
                        </div>
                        <div className='price-item d-flex align-items-center'>
                            <input name='price' value='7_50' type='checkbox' />
                            <span className='ms-2'>$7-$50</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
