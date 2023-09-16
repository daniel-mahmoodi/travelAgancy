import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./Ui-slice";
import cartReducer from "./cart-slice";
import cardReducer from "./card-slice";
import categoryReducer from "./category-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    category: categoryReducer,
    card:cardReducer
  },
});

export default store;
