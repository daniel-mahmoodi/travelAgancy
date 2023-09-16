import axios from "axios";
import { cardActions } from "./card-slice";
import { sequence } from "../events";

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
