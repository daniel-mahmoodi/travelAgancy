import axios from "axios";
import { baseURL } from "../basics";
import { uiActions } from "./Ui-slice";
import { searchActions } from "./search-slice";

// sendTextToSearch
export const fetchTextToSearch = (
  searchValue,
  currentPage,
  itemsPerPage
) => {
  return async (dispatch) => {
    dispatch(searchActions.loadingSearchData(true));
    //console.log("searchValueData", searchValue);
    axios({
      method: "get",
      url: `${baseURL}api/Product/GetByName?SearchText=${searchValue}&PageNumber=${currentPage}&RowCount=${itemsPerPage}`,
    })
      .then((response) => {
        dispatch(searchActions.loadingSearchData(false));
        const data = response.data.data;
        dispatch(searchActions.addNewListOfSearchData(data));
        dispatch(searchActions.fetchedEmptySearchData(false));
        if (data.length === 0) {
          dispatch(searchActions.hasMoreData(false));
        } else {
          dispatch(searchActions.hasMoreData(true));
        }
        if (response.data.totalItems === 0) {
          dispatch(searchActions.fetchedEmptySearchData(true));
        } else {
          dispatch(searchActions.fetchedEmptySearchData(false));
        }
      })
      .catch((error) => {
        dispatch(searchActions.loadingSearchData(false));
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "مشکل در دریافت",
            message: " لطفا دوباره اقدام کنید",
          })
        );
        console.error("Error sending data:", error);
      });
  };
};
