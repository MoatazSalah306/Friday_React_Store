import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../rtk/slices/products-slice"
import cartReducer from "../rtk/slices/cart-slice"

export const store = configureStore({
    reducer:{
        products: productsReducer,
        cart:cartReducer
    }
})