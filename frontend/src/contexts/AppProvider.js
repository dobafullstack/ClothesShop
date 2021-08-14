import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [isAppHover, setIsAppHover] = useState(false);
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);
    const [isVisibleLanguage, setIsVisibleLanguage] = useState(false);
    const [isVisibleLogin, setIsVisibleLogin] = useState(false);
    const [isVisibleCart, setIsVisibleCart] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    return (
        <AppContext.Provider
            value={{
                isAppHover,
                setIsAppHover,
                isVisibleSearch,
                setIsVisibleSearch,
                isVisibleLanguage,
                setIsVisibleLanguage,
                isVisibleLogin,
                setIsVisibleLogin,
                isVisibleCart,
                setIsVisibleCart,
                isLogin,
                setIsLogin,
            }}>
            {children}
        </AppContext.Provider>
    );
}
