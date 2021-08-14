import * as actionTypes from '../constants/product.constant'

const initialState = {
    products: [],
    isLoading: false,
    womenProduct: [],
    menProduct: []
};

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_REQUIRED:
            return {
                ...state,
                isLoading: true,
                products: []
            }
        case actionTypes.GET_PRODUCT_BY_CATEGORY_NAME:
            return{
                ...state,
                isLoading: false,
                products: [
                    ...action.payload.products
                ]
            }
        case actionTypes.GET_PRODUCT_BY_CATEGORY_DETAIL_NAME:
            return{
                ...state,
                isLoading: false,
                products: [
                    ...action.payload.products
                ]
            }
        case actionTypes.GET_WOMEN_PRODUCT: 
            return{
                ...state,
                womenProduct: [
                    ...action.payload.products
                ]
            }
        case actionTypes.GET_MEN_PRODUCT: 
            return{
                ...state,
                menProduct: [
                    ...action.payload.products
                ]
            }
        default:
            return state
    }
}