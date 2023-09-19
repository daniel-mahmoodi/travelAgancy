import { createSlice, current } from "@reduxjs/toolkit";
const { log } = console;
const defaultCartState = {
  items: [],
  cartItems: [],
  changed: false,
  userHasCart: false,
  showCartLoading: false,
  showNewCartLoading: false,
  showSendingTicketsLoading: false,
  showTiketDeleteLoading: false,
  deletingTicketId : 0,

};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    eraseAllTickets(state) {
      state.items = [];
    },

    toggleUserHasCart(state, action) {
      state.userHasCart = action.payload;
    },
    toggleCartLoading(state, action) {
      state.showCartLoading = action.payload;
    },
    toggleCreateCartLoading(state, action) {
      state.showNewCartLoading = action.payload;
    },
    toggleSendTicketLoading(state, action) {
      state.showSendingTicketsLoading = action.payload;
    },
    toggleDeleteTicketLoading(state, action) {
      state.showTiketDeleteLoading = action.payload.show;
      state.deletingTicketId = action.payload.id;
    },

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

    removeTicketToUserOrder(state, action) {
      const id = action.payload;
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
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
