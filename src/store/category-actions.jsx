import axios from "axios";
import { categoryActions } from "./category-slice";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const fetchListOfCategories = (token) => {
  console.log(token);
  return async (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Category/GetCategories`,
      headers: {
        "Content-Type": " application/json",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(categoryActions.ListOfCategories(response.data));
        // console.log("response", response);
      })
      .catch((error) => console.log("error", error));
  };
};
export const fetchListOfEvents = (id, token) => {
  return async (dispatch) => {
    dispatch(categoryActions.reEventsFetchLoading(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Event/GetEvents?CategoryId=${id}`,
      headers: {
        "Content-Type": " application/json",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(categoryActions.ListOfEvents(response.data));
        dispatch(categoryActions.reEventsFetchLoading(false));
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(categoryActions.reEventsFetchLoading(true));
      });
  };
};
