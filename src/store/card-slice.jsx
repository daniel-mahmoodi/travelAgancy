import { createSlice } from "@reduxjs/toolkit";

const defaultCardState = {
  sequencesItems: [],
  tickets: [],
  selectedCardId: "",
  reSeqFetchLoading: false,
  showTicketLoading: false,
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
    setSelectedCardId(state, action) {
      state.selectedCardId = action.payload;
    },
    toggleResequenceFetchLoading(state, action) {
      state.reSeqFetchLoading = action.payload;
    },
    toggleTicketLoading(state, action) {
      state.showTicketLoading = action.payload;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice.reducer;
