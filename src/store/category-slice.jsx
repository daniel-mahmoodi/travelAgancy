import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
  categoriesItems: [],
  eventsItems: [],
  eventID: 1,
  loading: false,
  showEventsLoading: false,
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
    reEventsFetchLoading(state, action) {
      state.showEventsLoading = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
