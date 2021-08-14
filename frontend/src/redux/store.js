import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/auth.reducer";
import { productReducer } from "./reducers/product.reducer";
import { cartReducer } from "./reducers/cart.reducer";

const reducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
