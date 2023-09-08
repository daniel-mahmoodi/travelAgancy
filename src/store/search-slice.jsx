import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  searchItems: [],
  searchLoading: false,
  showSearchInfo: false,
  noDataReceived: false,
  clickedOnSearch: false,
  hasMore: true,
  itemsPerPage: 15,
  page: 1,
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    addNewListOfSearchData(state, action) {
      state.searchItems = [...state.searchItems, ...action.payload];
    },
    loadingSearchData(state, action) {
      state.searchLoading = action.payload;
    },
    toggleSearchInfoButton(state, action) {
      state.showSearchInfo = action.payload;
    },
    fetchedEmptySearchData(state, action) {
      state.noDataReceived = action.payload;
    },
    userClickedOnSearch(state, action) {
      state.clickedOnSearch = action.payload;
    },
    hasMoreData(state, action) {
      state.hasMore = action.payload;
    },
    nextPage(state) {
      state.page++;
    },
    reSetPageData(state) {
      state.page = 1
      state.searchItems = []
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
