import { createSlice } from "@reduxjs/toolkit";

const initialCategoryState = {
  categoriesItems: [],
  selectedCategoryItems: [],
  ListOfSanses: [],
  categoryID: 1,
  loading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialCategoryState,
  reducers: {
    ListOfCategories(state, action) {
      state.categoriesItems = action.payload;
    },
    categorySelectedID(state, action) {
      state.categoryID = action.payload;
    },
    ListOfItemsFromSelectedCategory(state, action) {
      state.selectedCategoryItems = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    ListOfSansesOfSelectedCardItem(state, action) {
      state.ListOfSanses = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;
