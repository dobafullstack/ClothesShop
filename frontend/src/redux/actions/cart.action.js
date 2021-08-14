import * as actionTypes from "../constants/cart.constant";
import { toast } from "react-toastify";

export const addToCart = (item) => async (dispatch, getState) => {
    const cart = getState().cart.products;

    if (cart.length !== 0) {
        //cart is not null
        const index = cart.findIndex(
            (product) => product.product._id === item._id
        );
        if (index >= 0) {
            //item exist in cart
            dispatch({
                type: actionTypes.UPDATE_CART,
                payload: {
                    product: item,
                    count: 1,
                },
            });
        } else {
            //item is not exist in cart
            dispatch({
                type: actionTypes.ADD_TO_CART,
                payload: {
                    product: item,
                    totalPrice: item.price,
                },
            });
        }
    } else {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                product: item,
                totalPrice: item.price,
            },
        });
    }

    toast.success("Đã thêm vào giỏ hàng");
};

export const updateCart = (count, item) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.UPDATE_CART,
        payload: {
            count: count,
            product: item,
        },
    });

    if (count > 0) {
        toast.info("Đã tăng một sản phẩm!");
    } else {
        toast.error("Đã giảm một sản phẩm!");
    }
};

export const removeCart = (item, count) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            product: item,
            count: count
        }
    })

    toast.error('Đã xóa sản phẩm')
}
