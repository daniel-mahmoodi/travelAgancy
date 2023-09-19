import axios from "axios";
import { cardActions } from "./card-slice";
import { uiActions } from "./Ui-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const fetchSequenceDataOFSelectedCardItemHandler = (id, token) => {
  return async (dispatch) => {
    dispatch(cardActions.toggleResequenceFetchLoading(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Sans/GetSanses?EventId=${id}`,
      headers: {
        "Content-Type": " application/json",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(cardActions.ListOfSansesOfSelectedCardItem(response.data));
        dispatch(cardActions.toggleResequenceFetchLoading(false));
        console.log("response", response);
      })
      .catch((error) => console.log("error", error));
  };
};

export const fetchTicketsbySans = (id, token) => {
  return async (dispatch) => {
    dispatch(cardActions.toggleTicketLoading(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Ticket/GetTicketBySans?SansId=${id}`,
      headers: {
        "Content-Type": " application/json",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(cardActions.ListOfTicketsFromSelectedSans(response.data));
        dispatch(cardActions.toggleTicketLoading(false));
        // console.log("response ticket", response.data);
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(cardActions.toggleTicketLoading(true));
      });
  };
};
