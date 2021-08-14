import React, { useContext } from "react";
import "../assets/css/SideBar.css";
import classNames from "classnames";
import { AppContext } from "../contexts/AppProvider";

export default function SideBar(props) {
    const {
        isVisibleCart,
        setIsVisibleCart,
        isVisibleSearch,
        setIsVisibleSearch,
        isVisibleLanguage,
        setIsVisibleLanguage,
        isVisibleLogin,
        setIsVisibleLogin
    } = useContext(AppContext);

    const SideBarClassName = classNames("sidebar-wrapper", 
        {active: isVisibleCart},
        {active: isVisibleSearch},
        {active: isVisibleLanguage},
        {active: isVisibleLogin}
    );

    const handleCloseSidebar = () => {
        setIsVisibleCart(false);
        setIsVisibleSearch(false);
        setIsVisibleLanguage(false);
        setIsVisibleLogin(false);
    }
    return (
        <div className={SideBarClassName}>
            <div className='sidebar-header'>
                <span>{props.title}</span>
                <i
                    class='fal fa-times'
                    onClick={() => handleCloseSidebar()}></i>
            </div>
            <div className='sidebar-body'>{props.content}</div>
        </div>
    );
}
