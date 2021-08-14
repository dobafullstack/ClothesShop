import React, { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import BreadcrumbBar from "../components/BreadcrumbBar";
import "../assets/css/Category.css";
import Filter from "../components/Filter";
import ProductItem from "../components/ProductItem";
import { Row, Col, Container } from "reactstrap";
import {
    getProductByCategoryName,
    getProductByCategoryDetailName,
} from "../redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function Category() {
    const { categoryId, category_detail_id } = useParams();
    const breadcrumbs = useBreadcrumbs();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    useEffect(() => {
        if (category_detail_id) {
            console.log(category_detail_id.toLowerCase());
            dispatch(
                getProductByCategoryDetailName(category_detail_id.toLowerCase())
            );
        } else {
            dispatch(getProductByCategoryName(categoryId));
        }
    }, [categoryId, category_detail_id]);

    return (
        <div className='category-wrapper'>
            <BreadcrumbBar />
            <div className='title-top mb-3'>
                <span>{breadcrumbs[breadcrumbs.length - 1].breadcrumb}</span>
            </div>
            {products.isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
                    <ReactLoading
                        height={"5%"}
                        width={"5%"}
                        color={"#121212"}
                        type='spin'
                    />
                </div>
            ) : products.products.length !== 0 ? (
                <div>
                    <Filter />
                    <Container className='my-5'>
                        <Row>
                            {products.products.map((item) => (
                                <Col xl={3}>
                                    <ProductItem item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            ) : (
                <div className='d-flex justify-content-center text-none mt-5'>
                    <span className='text-center'>Chưa có sản phẩm</span>
                </div>
            )}
        </div>
    );
}
