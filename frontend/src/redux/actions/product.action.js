import axios from "axios";
import * as actionTypes from "../constants/product.constant";

export const getProductByCategoryName =
    (categoryName) => async (dispatch, getState) => {
        try {
            const { data } = await axios.get(
                `/products/category/${categoryName}`
            );

            dispatch({
                type: actionTypes.GET_PRODUCT_REQUIRED,
            });

            setTimeout(function () {
                dispatch({
                    type: actionTypes.GET_PRODUCT_BY_CATEGORY_NAME,
                    payload: {
                        products: data,
                    },
                });
            }, 1500);
        } catch (err) {}
    };

export const getWomenProduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/products/category/women`);

        console.log(data);

        dispatch({
            type: actionTypes.GET_PRODUCT_REQUIRED,
        });

        dispatch({
            type: actionTypes.GET_WOMEN_PRODUCT,
            payload: {
                products: data,
            },
        });
    } catch (err) {}
};
export const getMenProduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/products/category/men`);

        dispatch({
            type: actionTypes.GET_PRODUCT_REQUIRED,
        });

        dispatch({
            type: actionTypes.GET_MEN_PRODUCT,
            payload: {
                products: data,
            },
        });
    } catch (err) {}
};

export const getProductByCategoryDetailName =
    (category_detail_name) => async (dispatch, getState) => {
        console.log(category_detail_name);

        try {
            const { data } = await axios.get(
                `/products/category-detail/${category_detail_name}`
            );
            console.log(data);
            dispatch({
                type: actionTypes.GET_PRODUCT_REQUIRED,
            });

            setTimeout(function () {
                dispatch({
                    type: actionTypes.GET_PRODUCT_BY_CATEGORY_DETAIL_NAME,
                    payload: {
                        products: data,
                    },
                });
            }, 1500);
        } catch (err) {}
    };

export const searchProduct =
    (productName = "women") =>
    async (dispatch, getState) => {
        try {
            const { data } = await axios.get(`/products/search/${productName}`);

            dispatch({ type: actionTypes.SEARCH_REQUIRED });

            setTimeout(() => {
                dispatch({
                    type: actionTypes.GET_PRODUCT_BY_NAME,
                    payload: {
                        products: data,
                    },
                });
            }, 1500);
        } catch (err) {
            const { data } = await axios.get(`/products/search/women`);

            dispatch({ type: actionTypes.SEARCH_REQUIRED });

            setTimeout(() => {
                dispatch({
                    type: actionTypes.GET_PRODUCT_BY_NAME,
                    payload: {
                        products: data,
                    },
                });
            }, 1500);
        }
    };

export const getDetailProduct = (productName) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/products/detail/${productName}`);

        dispatch({
            type: actionTypes.GET_DETAIL_PRODUCT,
            payload: { product: data },
        });
    } catch (err) {
        console.log(err)
    }
};
