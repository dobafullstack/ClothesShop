import * as actionTypes from "../constants/cart.constant";

const initialState = {
    products: [],
    totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        product: { ...action.payload.product },
                        count: 1,
                    },
                ],
                totalPrice: state.totalPrice + action.payload.totalPrice,
            };

        case actionTypes.UPDATE_CART:
            let totalPrice = state.totalPrice;
            const products = [...state.products];
            const index = products.findIndex(
                (item) => item.product._id === action.payload.product._id
            );
            products[index].count = products[index].count + action.payload.count;

            if (action.payload.count > 0) {
                totalPrice = totalPrice + action.payload.product.price
            }else{
                totalPrice = totalPrice - action.payload.product.price;
            }

            return {
                ...state,
                products: [...products],
                totalPrice: totalPrice,
            };
        case actionTypes.REMOVE_FROM_CART:
            let productCart = [...state.products];

            productCart = productCart.filter(item => item.product._id !== action.payload.product._id);

            console.log(productCart)
            return{
                ...state,
                products: [...productCart],
                totalPrice: state.totalPrice - action.payload.product.price * action.payload.count
            }
        default:
            return state;
    }
};
