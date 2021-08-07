import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import BreadcrumbBar from "../components/BreadcrumbBar";
import '../assets/css/Category.css'
import Filter from "../components/Filter";
import ProductItem from '../components/ProductItem'
import {Row, Col, Container} from 'reactstrap'
import {femaleItems} from '../static-product'
import format from '../configs/USDCurrency'

export default function Category() {
    const { categoryId, category_detail_id } = useParams();
    const breadcrumbs = useBreadcrumbs();

    return <div className="category-wrapper">
        <BreadcrumbBar />
        <div className="title-top mb-3"><span>{breadcrumbs[breadcrumbs.length - 1].breadcrumb}</span></div>
        <Filter/>
        <Container className="my-5">
            <Row>
                
                {femaleItems.map(item => (<Col xl={3}><ProductItem
                                img={
                                    require(`../assets/imgs/products/${item.img}`)
                                        .default
                                }
                                name={item.name}
                                price={format(item.price)}
                                sale={item.sale ? format(item.sale) : null}
                            /></Col>))}
            </Row>
        </Container>
    </div>
}
