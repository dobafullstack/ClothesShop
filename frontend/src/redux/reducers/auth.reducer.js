import * as actionTypes from "../constants/auth.constant";

const initialState = {
    accessToken: localStorage.getItem("accessToken") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    isLoading: false,
    message: "",
    isLogin: localStorage.getItem("accessToken") ? true : false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUIRED:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                accessToken: action.payload.accessToken,
                isLogin: action.payload.isLogin,
                user: {...action.payload.user}
            };
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                message: action.payload.message,
                isLogin: action.payload.isLogin,
            };
        case actionTypes.LOGOUT:
            return{
                ...state,
                isLogin: action.payload.isLogin,
                accessToken: action.payload.accessToken,
                user: {...action.payload.user}
            }
        default:
            return state;
    }
};
