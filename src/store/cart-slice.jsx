import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: { items: [] },
  favoriteItems: { items: [] },
  totalPrice: 0,
  totalDiscountedPrice: 0,
  totalQuantity: 0,
  changed: false,
  hasItem: false,
  reseivdeDataCorrectly: false,
  sendingCoupon: true,
  checkServerAndLocalItems: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
//     eraseAllCart(state) {
//       state.items.items = [];
//       state.totalPrice = 0;
//       state.totalQuantity = 0;
//       state.totalDiscountedPrice = 0;
//       state.changed = true;
//     },
//     replaceCart(state, action) {
//       state.items = action.payload.cartState.cartData;
//       state.totalPrice = action.payload.cartState.totalPrice;
//       state.totalDiscountedPrice =
//         action.payload.cartState.totalDiscountedPrice;
//       state.totalQuantity = action.payload.cartState.totalQuantity;
//     },
//     changeTotalDiscountedAmountAfterAddingCoupon(state, action) {
//       state.totalDiscountedPrice = action.payload;
//     },
//     toggleChangeToFalse(state) {
//       state.changed = false;
//     },
//     toggleChanges(state) {
//       state.changed = !state.changed;
//     },
//     toggleCouponButton(state, action) {
//       state.sendingCoupon = action.payload;
//     },
//     compareServerAndLocalItems(state, action) {
//       state.checkServerAndLocalItems = action.payload;
//     },
//     receivedData(state, action) {
//       state.reseivdeDataCorrectly = action.payload;
//     },

//     addItemToCart(state, action) {
//       const newItem = action.payload;
//       //console.log(
//       // ".................current(state)",
//       // current(state.items).items
//       // );
//       newItem.price === newItem.discountedPrice
//         ? (state.totalPrice =
//             state.totalPrice + newItem.price * newItem.quantity)
//         : (state.totalPrice =
//             state.totalPrice + newItem.discountedPrice * newItem.quantity);
//       state.totalDiscountedPrice = state.totalPrice;
//       state.totalQuantity++;
//       const existingCartItem = state.items.items?.find(
//         (item) => item.product.id === newItem.id
//       );
//       state.hasItem = existingCartItem ? true : false;
//       state.changed = true;
//       if (!existingCartItem) {
//         state.items.items?.push({
//           product: newItem,
//           quantity: newItem.quantity,
//         });
//       } else {
//         existingCartItem.quantity++;
//       }
//     },
//     //------------favoriteList--------
//     replaceFavoriteCart(state, action) {
//       state.favoriteItems.items =
//         action.payload.favoriteCartState.favoriteCartData;
//     },

//     addOrRemoveFavoriteItemInList(state, action) {
//       const newFavoriteItem = action.payload;

//       const existingCartItem = state.favoriteItems.items?.find(
//         (item) => item.id === newFavoriteItem.id
//       );

//       if (!existingCartItem) {
//         state.favoriteItems.items?.push(newFavoriteItem);
//       } else {
//         state.favoriteItems.items = state.favoriteItems.items?.filter(
//           (item) => item.id !== newFavoriteItem.id
//         );
//       }
//     },
//     removeItemFromCart(state, action) {
//       const id = action.payload;
//       state.changed = true;
//       const existingCartItem = state.items.items?.find(
//         (item) => item.product.id === id
//       );

//       existingCartItem.product.price ===
//       existingCartItem.product.discountedPrice
//         ? (state.totalPrice = state.totalPrice - existingCartItem.product.price)
//         : (state.totalPrice =
//             state.totalPrice - existingCartItem.product.discountedPrice);
//       state.totalDiscountedPrice = state.totalPrice;

//       state.totalQuantity--;

//       if (existingCartItem.quantity === 1) {
//         existingCartItem.quantity = 0;
//         state.items.items = state.items.items?.filter(
//           (item) => item.product.id !== id
//         );
//       } else {
//         existingCartItem.quantity--;
//       }
//     },
//     eraseItemFromCart(state, action) {
//       const id = action.payload;
//       state.changed = true;
//       const existingCartItem = state.items.items?.find(
//         (anyItem) => anyItem.product.id === id
//       );

//       existingCartItem.product.price ===
//       existingCartItem.product.discountedPrice
//         ? (state.totalPrice =
//             state.totalPrice -
//             existingCartItem.product.price * existingCartItem.quantity)
//         : (state.totalPrice =
//             state.totalPrice -
//             existingCartItem.product.discountedPrice *
//               existingCartItem.quantity);
//       state.totalDiscountedPrice = state.totalPrice;

//       state.totalQuantity = state.totalQuantity - existingCartItem.quantity;
//       state.items.items = state.items.items?.filter(
//         (item) => item.product.id !== id
//       );
//       existingCartItem.quantity = 0;
//     },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
