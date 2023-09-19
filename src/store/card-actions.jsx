import axios from "axios";
import { cardActions } from "./card-slice";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const fetchSequenceDataOFSelectedCardItemHandler = (id, token) => {
  return async (dispatch) => {
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
        // console.log("response ticket", response.data);
      })
      .catch((error) => console.log("error", error));
  };
};

export const fetchTicketsbySans = (id, token) => {
  return async (dispatch) => {
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
        // console.log("response ticket", response.data);
      })
      .catch((error) => console.log("error", error));
  };
};
