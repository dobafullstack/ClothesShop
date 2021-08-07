import React from "react";
import { useContext } from "react";

import Cart from "../components/Cart";
import Language from "../components/Language";
import Login from "../components/Login";
import Search from "../components/Search";
import Advantage from "../components/Advantage";
import FeatureProduct from "../components/FeatureProduct";
import Banner from "../components/Banner";

import { femaleItems, maleItems } from "../static-product";

import { AppContext } from "../contexts/AppProvider";

export default function Home() {
    return (
        <div>
            <Banner />
            <Advantage />
            <FeatureProduct title="women's" items={femaleItems} />
            <FeatureProduct title="men's" items={maleItems} />
        </div>
    );
}
