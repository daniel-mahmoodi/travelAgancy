import { createSlice } from "@reduxjs/toolkit";

const defaultCardState = {
  sequencesItems: [],
  tickets:[]
};

const cardSlice = createSlice({
  name: "card",
  initialState: defaultCardState,
  reducers: {
    ListOfSansesOfSelectedCardItem(state, action) {
      state.sequencesItems = action.payload;
    },
    ListOfTicketsFromSelectedSans(state, action) {
      state.tickets = action.payload;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice.reducer;
