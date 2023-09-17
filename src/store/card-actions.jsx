import axios from "axios";
import { cardActions } from "./card-slice";
import { sequence, tickets } from "../events";

const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const fetchSequenceDataOFSelectedCardItemHandler = (id) => {
  return async (dispatch) => {
    dispatch(cardActions.ListOfSansesOfSelectedCardItem(sequence));
    //   axios
    //     .get(`${apiUrl}/Sans/GetSanses?EventId=${id}`)
    //     .then((response) => {
    //       // Handle the successful response here
    //       console.log("sanses", response.data);
    //       dispatch(cardActions.ListOfSansesOfSelectedCardItem(response.data));
    //     })
    //     .catch((error) => {
    //       // Handle any errors that occurred during the request
    //       console.error(error);
    //     });
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
