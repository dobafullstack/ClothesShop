import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import "../assets/css/Search.css";
import format from "../configs/USDCurrency";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../redux/actions/product.action";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

export default function Search() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const products = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(searchProduct(searchValue));
    }, [searchValue]);

    return (
        <div className='search-wrapper'>
            <div className='filter'>
                <div className='w-100 custom-select'>
                    <select className='select-category w-100'>
                        <option>All Categories</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <i class='fal fa-chevron-down'></i>
                </div>
                <input
                    type='text'
                    placeholder='What are you Looking for?'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <div className='item-wrapper'>
                <h6>Need some inspiration?</h6>
                <div className='item-search-wrapper'>
                    {products.isSearching ? (
                        <div className='d-flex justify-content-center my-3'>
                            <ReactLoading
                                height={"20%"}
                                width={"20%"}
                                color={"#121212"}
                                type='spin'
                            />
                        </div>
                    ) : products.searchProduct.length === 0 ? (
                        <div className='d-flex justify-content-center mt-5 text-none'>
                            <span>None</span>
                        </div>
                    ) : (
                        products.searchProduct.map((item) => (
                            <Row className='search-item'>
                                <Col xl={3}>
                                    <Link to={`/product/${item.name}`}>
                                        <img
                                            alt='icon'
                                            src={item.images[0]}
                                            className='img-fluid'
                                        />
                                    </Link>
                                </Col>
                                <Col xl={9} className='d-flex flex-column'>
                                    <Link className='product-name' to={`/product/${item.name}`}>
                                        {item.name}
                                    </Link>
                                    <span className='product-price'>
                                        {format(item.price)}
                                    </span>
                                </Col>
                            </Row>
                        ))
                    )}
                    {}
                </div>
            </div>
        </div>
    );
}
