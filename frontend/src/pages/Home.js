import React, {useEffect} from "react";

import Advantage from "../components/Advantage";
import FeatureProduct from "../components/FeatureProduct";
import Banner from "../components/Banner";
import NewsBanner from "../components/NewsBanner";
import Blog from "../components/Blog";

import { useDispatch, useSelector } from "react-redux";
import { getMenProduct, getWomenProduct } from "../redux/actions/product.action";

export default function Home() {
    const dispatch = useDispatch();
    const womenProduct = useSelector(state => state.products.womenProduct)
    const menProduct = useSelector(state => state.products.menProduct)

    useEffect(() => {
        dispatch(getWomenProduct());
        dispatch(getMenProduct());
    }, [dispatch]);

    return (
        <div>
            <Banner />
            <Advantage />
            <FeatureProduct title="women's" items={womenProduct} />
            <FeatureProduct title="men's" items={womenProduct} />
            <NewsBanner />
            <Blog />
        </div>
    );
}
