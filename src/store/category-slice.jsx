import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
  categoriesItems: [],
  eventsItems: [],
  ListOfSanses: [],
  eventID: 1,
  loading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    ListOfCategories(state, action) {
      state.categoriesItems = action.payload;
    },
    selectedEventID(state, action) {
      state.eventID = action.payload;
    },
    ListOfEvents(state, action) {
      state.eventsItems = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    // ListOfSansesOfSelectedCardItem(state, action) {
    //   state.ListOfSanses = action.payload;
    // },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
