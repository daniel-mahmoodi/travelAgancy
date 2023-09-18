import { createSlice, current } from '@reduxjs/toolkit';
const { log } = console;
const defaultCartState = {
  items: [],
  cartItems: [],
  // favoriteItems: { items: [] },
  totalPrice: 0,
  // totalDiscountedPrice: 0,
  totalQuantity: 0,
  changed: false,
  userHasCart: false,
  // hasItem: false,
  // reseivdeDataCorrectly: false,
  // sendingCoupon: true,
  // checkServerAndLocalItems: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    eraseAllTickets(state) {
      state.items = [];
      // state.items.items = [];
      // state.totalPrice = 0;
      // state.totalQuantity = 0;
      // state.totalDiscountedPrice = 0;
      // state.changed = true;
    },
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
    toggleUserHasCart(state, action) {
      state.userHasCart = action.payload;
    },
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
    // event Id,price,
    addTicketToUserOrder(state, action) {
      const id = action.payload;
      const existingTicket = state.items?.find(
        (ticket) => ticket.ticketId === id
      );
      if (!existingTicket) {
        state.items.push({
          ticketId: id,
          count: 1,
        });
      } else {
        existingTicket.count++;
      }
    },
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
    removeTicketToUserOrder(state, action) {
      const id = action.payload;
      // state.order = {
      //   ticketId: id,
      //   count: 1,
      // };
      // state.changed = true;
      const existingTicket = state.items?.find(
        (ticket) => ticket.ticketId === id
      );
      if (existingTicket.count === 1) {
        existingTicket.count = 0;
        state.items = state.items?.filter((item) => item.ticketId !== id);
      } else {
        existingTicket.count--;
      }
    },
    addFetchedUserCartItems(state, action) {
      state.cartItems = action.payload;
    },
    eraseTicketsFromUserOrder(state, action) {
      const id = action.payload;
      // state.changed = true;
      // const existingTicket = state.cartItems?.find(
      //   (ticket) => ticket.id === id
      // );
      // existingTicket.count = 0;
      console.log(current(state.cartItems));
            // state.cartItems = state.cartItems?.filter((item) => item.tickets.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
