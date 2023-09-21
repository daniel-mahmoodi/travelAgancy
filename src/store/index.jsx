import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import uiReducer from "./Ui-slice";
import cartReducer from "./cart-slice";
import walletReducer from "./Wallet-slice";
import cardReducer from "./card-slice";
import categoryReducer from "./category-slice";
import authReducer from "./auth-slice";

// Redux Persist:
const persistAuthConfig = {
  key: "auth-root",
  storage,
};
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
// .

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    wallet: walletReducer,
    category: categoryReducer,
    card: cardReducer,
    auth: persistedAuthReducer,
  },
  // Redux Persist:
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
  //.
});

export default store;

// Redux Persist:
export const persistor = persistStore(store);
// .
