import { createSlice } from "@reduxjs/toolkit";

const defaultCardState = {
  sequencesItems: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState: defaultCardState,
  reducers: {
    ListOfSansesOfSelectedCardItem(state, action) {
      state.sequencesItems = action.payload;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice.reducer;
