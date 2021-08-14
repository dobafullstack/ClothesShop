import * as actionTypes from "../constants/auth.constant";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const login = (username, password) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/auth/login", {
            username,
            password,
        });

        const user = jwt_decode(data.accessToken)

        dispatch({
            type: actionTypes.LOGIN_REQUIRED,
        });

        setTimeout(function(){
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: {
                    accessToken: data.accessToken,
                    isLogin: true,
                    user: user.customer,
                },
            });
        }, 2000)

        localStorage.setItem(
            "accessToken",
            JSON.stringify(getState().auth.accessToken)
        );

        localStorage.setItem(
            "user",
            JSON.stringify(getState().auth.user)
        );
    } catch (e) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            payload: {
                message: e.response.data.message,
                isLogin: false
            },
        });
        toast.error(e.response.data.message);
    }

    return JSON.stringify(getState().auth.accessToken);
};

export const logout = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.LOGOUT,
        payload: {
            isLogin: false,
            accessToken: "",
            user: {}
        }
    });

    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
}
