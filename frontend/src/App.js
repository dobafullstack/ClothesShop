import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Sidebar from "./components/SideBar";
import Cart from "./components/Cart";
import Language from "./components/Language";
import Login from "./components/Login";
import Search from "./components/Search";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";

import { useContext } from "react";
import { AppContext } from "./contexts/AppProvider";
import classnames from "classnames";

import axios from "axios";

import { useSelector } from "react-redux";

// import jwt_decode from "jwt-decode";
import jwt from 'jsonwebtoken'

function App() {
    axios.defaults.baseURL = "http://localhost:5000";
    axios.defaults.headers.post["Content-Type"] =
        "application/json; charset=utf-8";

    const isLogin = useSelector(state => state.auth.isLogin)

    const token = localStorage.getItem('accessToken');

    // try{
    //     console.log(jwt.verify(JSON.parse(token), "soifjas"))
    // }catch(err){
    //     console.log(err)
    // }

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
        if (isVisibleSearch) return "Search";
        if (isVisibleLanguage) return "Language";
        if (isVisibleLogin && !isLogin) return "Login";
        if (isVisibleLogin && isLogin) return "Profile";
        if (isVisibleCart) return "Cart";
    };

    const getContentSidebar = () => {
        if (isVisibleSearch) return <Search />;
        if (isVisibleLanguage) return <Language />;
        if (isVisibleLogin) return <Login />;
        if (isVisibleCart) return <Cart />;
    };

    return (
        <Router>
            <div className={AppClassName}>
                <TopBar />
                <Navbar />
                {/* <Advantage /> */}
                <div style={{ minHeight: "69vh" }} className={bodyClassName}>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route
                            path='/category/:categoryId/:category_detail_id'
                            exact>
                            <Category />
                        </Route>
                        <Route path='/category/:categoryId/' exact>
                            <Category />
                        </Route>
                        <Route path='/product/:product_name' exact>
                            <Product />
                        </Route>
                    </Switch>
                </div>
                <Sidebar
                    title={getTitleSidebar()}
                    content={getContentSidebar()}
                />
                <Footer />
            </div>
            <ToastContainer
                position='bottom-left'
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;
