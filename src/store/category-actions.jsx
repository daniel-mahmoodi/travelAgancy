import axios from "axios";
import { categoryActions } from "./category-slice";
import { events } from "../events";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const fetchListOfCategoriesHandler = (currentPage, itemsPerPage) => {
  return async (dispatch) => {
    dispatch(categoryActions.toggleLoading(true));
    axios
      .get(`${apiUrl}/Category/GetCategories`)
      .then((response) => {
        // Handle the successful response here
        dispatch(categoryActions.ListOfCategories(response.data));
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
};
export const fetchListOfItemsFromSelectedCategoryHandler = (id) => {
  return async (dispatch) => {
    console.log("events", events, id);
    dispatch(categoryActions.ListOfItemsFromSelectedCategory(events));

    // axios
    //   .get(`${apiUrl}/Event/GetEvents?CategoryId=${id}`)
    //   .then((response) => {
    //     // Handle the successful response here
    //     console.log('',response.data);
    //     dispatch(categoryActions.ListOfItemsFromSelectedCategory(response.data));
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the request
    //     console.error(error);
    //   });
  };
};
