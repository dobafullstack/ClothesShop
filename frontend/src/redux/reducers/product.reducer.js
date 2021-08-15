import * as actionTypes from "../constants/product.constant";

const initialState = {
    products: [],
    isLoading: false,
    isSearching: false,
    womenProduct: [],
    menProduct: [],
    searchProduct: [],
    detail_product: {
        images: [],
        price: 0
    },
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_REQUIRED:
            return {
                ...state,
                isLoading: true,
                products: [],
            };
        case actionTypes.GET_PRODUCT_BY_CATEGORY_NAME:
            return {
                ...state,
                isLoading: false,
                products: [...action.payload.products],
            };
        case actionTypes.GET_PRODUCT_BY_CATEGORY_DETAIL_NAME:
            return {
                ...state,
                isLoading: false,
                products: [...action.payload.products],
            };
        case actionTypes.GET_WOMEN_PRODUCT:
            return {
                ...state,
                womenProduct: [...action.payload.products],
            };
        case actionTypes.GET_MEN_PRODUCT:
            return {
                ...state,
                menProduct: [...action.payload.products],
            };
        case actionTypes.SEARCH_REQUIRED:
            return {
                ...state,
                isSearching: true,
            };
        case actionTypes.GET_PRODUCT_BY_NAME:
            return {
                ...state,
                searchProduct: [...action.payload.products],
                isSearching: false,
            };
        case actionTypes.GET_DETAIL_PRODUCT:
            return {
                ...state,
                detail_product: { ...action.payload.product },
            };
        default:
            return state;
    }
};
