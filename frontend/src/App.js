import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Advantage from "./components/Advantage";
import Footer from "./components/Footer";
import FeatureProduct from "./components/FeatureProduct";
import Banner from './components/Banner'


import Sidebar from "./components/SideBar";
import Cart from "./components/Cart"
import Language from "./components/Language"
import Login from "./components/Login"
import Search from "./components/Search"


import { useContext } from "react";
import { AppContext } from "./contexts/AppProvider";
import classnames from "classnames";

function App() {
    const {
        isAppHover,
        isVisibleSearch,
        isVisibleLanguage,
        isVisibleLogin,
        isVisibleCart,
    } = useContext(AppContext);

    const bodyClassName = classnames("body-content", { isHover: isAppHover });
    const AppClassName = classnames(
        "App",
        { active: isVisibleSearch },
        { active: isVisibleLanguage },
        { active: isVisibleLogin },
        { active: isVisibleCart }
    );

    const getTitleSidebar = () => {
        if (isVisibleSearch)
            return "Search"
        if (isVisibleLanguage)
            return "Language"
        if (isVisibleLogin)
            return "Login"
        if (isVisibleCart)
            return "Cart"
    }

    const getContentSidebar = () => {
        if (isVisibleSearch)
            return <Search />
        if (isVisibleLanguage)
            return <Language />
        if (isVisibleLogin)
            return <Login />
        if (isVisibleCart)
            return <Cart />;
    }

    return (
        <div className={AppClassName}>
            <TopBar />
            <Navbar />
            {/* <Advantage /> */}
            <div style={{ minHeight: "69vh" }} className={bodyClassName}>
                <Banner />
                <Advantage />
                <FeatureProduct title="women's"/>
                <FeatureProduct title="men's"/>
            </div>
            <Sidebar title={getTitleSidebar()} content={getContentSidebar()}/>
            <Footer />
        </div>
    );
}

export default App;
